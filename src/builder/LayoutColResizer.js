'use strict';

import core from 'metal';
import templates from './LayoutColResizer.soy.js';
import Component from 'metal-component';
import { Drag, DragDrop } from 'metal-drag-drop';
import Soy from 'metal-soy';

/**
 * Handles resizing, adding and removing a row's columns via drag and drop.
 */
class LayoutColResizer extends Component {
	/**
	 * Lifecycle function. Sets up the drag and drop behavior.
	 */
	attached() {
		this.drag_ = new DragDrop({
			axis: 'x',
			constrain: this.element,
			container: this.element,
			dragPlaceholder: Drag.Placeholder.CLONE,
			handles: '.layout-col-resizer-breakpoint-handle',
			sources: '.layout-col-resizer-breakpoint',
			targets: '.layout-col-resizer-breakpoint'
		});
		this.drag_.on(DragDrop.Events.END, function(data, event) {
			event.preventDefault();
		});
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this.drag_.dispose();
		this.drag_ = null;
	}

	/**
	 * Lifecycle function. Updates `DragDrop` references to nodes that might
	 * have been rerendered.
	 */
	rendered() {
		if (this.drag_) {
			this.drag_.constrain = this.element;
			this.drag_.container = this.element;
			this.drag_.targets = '.layout-col-resizer-breakpoint';
		}
	}
}

Soy.register(LayoutColResizer, templates);

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LayoutColResizer.STATE = {
	/**
	 * A map of the breakpoints being used.
	 * @type {!Object<string, boolean>}
	 */
	breakpoints: {
		validator: core.isObject,
		valueFn: () => {}
	}
};

export default LayoutColResizer;
