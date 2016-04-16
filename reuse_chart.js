/* jshint eqnull:true*/
/* globals d3*/

var tdg_timeline = (function() { // <---------------------------------------- CHANGE ME

    function copyIfExisty(src, trgt) {
        each(src, function(attr, key) {
            if (isObject(attr) && isObject(trgt[key])) {
                copyIfExisty(attr, trgt[key]);
            } else if (trgt[key] != null && !isObject(src[key])) {
                src[key] = trgt[key];
            }
        });
    }

    function isObject(o) {
        return o && o.constructor === Object;
    }

    function each(obj, cb) {
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                cb(obj[i], i, obj);
            }
            obj.forEach(cb);
        } else if (isObject(obj)) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    cb(obj[key], key, obj);
                }
            }
        }
    }

    // --------------------------------- PUT HERE ALL THE GLOBAL VARIABLES AND FUNCTIONS THAT DON'T NEED TO ACCESS PROPS AND INNERPROPS THROUGH SCOPE (Z1)
    // it's importan to separate your layout calculation logic
    // from your rendering logic. This function should return
    // the object that represents the state of the component
    // and used by render function
    function buildLayout (props, innerProps) {
      var layout = {};

      return layout;
    }

    // all of the elements of the component should go to group_main
    // use layout obj to render your component
    // do not calulate anything in this function! It's only for rendering
    // if you need to calculate s-g do it in buildLayout
    function render (group_main, layout, props, innerProps) {

    }

    // --------------------------------- END OF Z1
    return function(user_props) {
        var props = {
            width: 300,
            height: 100
        };

        var innerProps = {

        };

        // ---------------------------------- INTERNAL FUNCTIONS THAT NEED ACCESS TO PROPS AND INNERPROPS THROUGH SCOPE GO HERE (Z2)

        // ---------------------------------- END OF Z2
        copyIfExisty(props, user_props || {});

        function createAccessor(attr) {
            function accessor(value) {
                if (!arguments.length) {
                    return props[attr];
                }
                props[attr] = value;
                return chart;
            }
            return accessor;
        }

        function chart(selection) {
            var group_main = selection.append('g').classed('group-main', true);

            var layout = buildLayout(props, innerProps);

            render( group_main, layout, props, innerProps );
        }

        /*add extra methods to chart object zone*/



        /*end of add extra methods to chart object zone*/

        for (var attr in props) {
            if ((!chart[attr]) && (props.hasOwnProperty(attr))) {
                chart[attr] = createAccessor(attr);
            }
        }

        /* start-test-block */

        /* end-test-block */

        return chart;
    };
})();
