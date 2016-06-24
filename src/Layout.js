import ComponentRegistry from '../bower_components/metal/src/component/ComponentRegistry';
import SoyComponent from '../bower_components/metal/src/soy/SoyComponent';
import './Layout.soy';

class Layout extends SoyComponent {
    constructor(opt_config) {
        super(opt_config);
    }
}

Layout.ATTRS = {data: []};

ComponentRegistry.register('Layout', Layout);