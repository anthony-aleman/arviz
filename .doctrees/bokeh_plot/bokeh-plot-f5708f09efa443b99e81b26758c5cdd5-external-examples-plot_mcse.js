(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("c1bbaa10-063c-4ae4-9231-87c07a03fd93");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c1bbaa10-063c-4ae4-9231-87c07a03fd93' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c586c30b-5d8a-435f-ac59-1e8b60345da9":{"defs":[],"roots":{"references":[{"attributes":{"text":"mu"},"id":"38490","type":"Title"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38511"},"major_label_policy":{"id":"38512"},"ticker":{"id":"38438"}},"id":"38437","type":"LinearAxis"},{"attributes":{"callback":null},"id":"38416","type":"HoverTool"},{"attributes":{},"id":"38438","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"38419"},{"id":"38455"}],"tools":[{"id":"38409"},{"id":"38410"},{"id":"38411"},{"id":"38412"},{"id":"38413"},{"id":"38414"},{"id":"38415"},{"id":"38416"},{"id":"38445"},{"id":"38446"},{"id":"38447"},{"id":"38448"},{"id":"38449"},{"id":"38450"},{"id":"38451"},{"id":"38452"}]},"id":"38521","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"38452","type":"HoverTool"},{"attributes":{"source":{"id":"38487"}},"id":"38489","type":"CDSView"},{"attributes":{"axis":{"id":"38437"},"ticker":null},"id":"38440","type":"Grid"},{"attributes":{},"id":"38499","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"38417"}},"id":"38411","type":"BoxZoomTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38508"},"major_label_policy":{"id":"38509"},"ticker":{"id":"38442"}},"id":"38441","type":"LinearAxis"},{"attributes":{"children":[{"id":"38522"},{"id":"38520"}]},"id":"38523","type":"Column"},{"attributes":{"toolbar":{"id":"38521"},"toolbar_location":"above"},"id":"38522","type":"ToolbarBox"},{"attributes":{"axis":{"id":"38441"},"dimension":1,"ticker":null},"id":"38444","type":"Grid"},{"attributes":{},"id":"38500","type":"Selection"},{"attributes":{},"id":"38429","type":"DataRange1d"},{"attributes":{},"id":"38442","type":"BasicTicker"},{"attributes":{"source":{"id":"38464"}},"id":"38468","type":"CDSView"},{"attributes":{"overlay":{"id":"38453"}},"id":"38447","type":"BoxZoomTool"},{"attributes":{},"id":"38446","type":"PanTool"},{"attributes":{},"id":"38409","type":"ResetTool"},{"attributes":{},"id":"38445","type":"ResetTool"},{"attributes":{},"id":"38451","type":"SaveTool"},{"attributes":{},"id":"38448","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"38454"}},"id":"38449","type":"LassoSelectTool"},{"attributes":{},"id":"38501","type":"UnionRenderers"},{"attributes":{},"id":"38415","type":"SaveTool"},{"attributes":{},"id":"38450","type":"UndoTool"},{"attributes":{},"id":"38410","type":"PanTool"},{"attributes":{},"id":"38412","type":"WheelZoomTool"},{"attributes":{},"id":"38502","type":"Selection"},{"attributes":{},"id":"38414","type":"UndoTool"},{"attributes":{"overlay":{"id":"38418"}},"id":"38413","type":"LassoSelectTool"},{"attributes":{},"id":"38494","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"38401"},"ticker":null},"id":"38404","type":"Grid"},{"attributes":{"axis":{"id":"38405"},"dimension":1,"ticker":null},"id":"38408","type":"Grid"},{"attributes":{},"id":"38495","type":"AllLabels"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"38494"},"major_label_policy":{"id":"38495"},"ticker":{"id":"38406"}},"id":"38405","type":"LinearAxis"},{"attributes":{},"id":"38497","type":"BasicTickFormatter"},{"attributes":{},"id":"38498","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38453","type":"BoxAnnotation"},{"attributes":{},"id":"38406","type":"BasicTicker"},{"attributes":{"children":[[{"id":"38392"},0,0],[{"id":"38428"},0,1]]},"id":"38520","type":"GridBox"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"38484","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38466","type":"Circle"},{"attributes":{},"id":"38397","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38417","type":"BoxAnnotation"},{"attributes":{},"id":"38513","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"38431","type":"DataRange1d"},{"attributes":{},"id":"38514","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38497"},"major_label_policy":{"id":"38498"},"ticker":{"id":"38402"}},"id":"38401","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38454","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38500"},"selection_policy":{"id":"38499"}},"id":"38464","type":"ColumnDataSource"},{"attributes":{"source":{"id":"38473"}},"id":"38475","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"38445"},{"id":"38446"},{"id":"38447"},{"id":"38448"},{"id":"38449"},{"id":"38450"},{"id":"38451"},{"id":"38452"}]},"id":"38455","type":"Toolbar"},{"attributes":{},"id":"38515","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"38395","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38418","type":"PolyAnnotation"},{"attributes":{},"id":"38402","type":"BasicTicker"},{"attributes":{"below":[{"id":"38401"}],"center":[{"id":"38404"},{"id":"38408"}],"height":500,"left":[{"id":"38405"}],"output_backend":"webgl","renderers":[{"id":"38467"},{"id":"38469"},{"id":"38470"},{"id":"38471"},{"id":"38474"}],"title":{"id":"38476"},"toolbar":{"id":"38419"},"toolbar_location":null,"width":500,"x_range":{"id":"38393"},"x_scale":{"id":"38397"},"y_range":{"id":"38395"},"y_scale":{"id":"38399"}},"id":"38392","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"38469","type":"Span"},{"attributes":{},"id":"38516","type":"Selection"},{"attributes":{"data_source":{"id":"38464"},"glyph":{"id":"38465"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38466"},"view":{"id":"38468"}},"id":"38467","type":"GlyphRenderer"},{"attributes":{},"id":"38433","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"38470","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38472","type":"Scatter"},{"attributes":{},"id":"38399","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"38483","type":"Span"},{"attributes":{"data_source":{"id":"38473"},"glyph":{"id":"38472"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38475"}},"id":"38474","type":"GlyphRenderer"},{"attributes":{},"id":"38508","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"38476","type":"Title"},{"attributes":{},"id":"38509","type":"AllLabels"},{"attributes":{"below":[{"id":"38437"}],"center":[{"id":"38440"},{"id":"38444"}],"height":500,"left":[{"id":"38441"}],"output_backend":"webgl","renderers":[{"id":"38481"},{"id":"38483"},{"id":"38484"},{"id":"38485"},{"id":"38488"}],"title":{"id":"38490"},"toolbar":{"id":"38455"},"toolbar_location":null,"width":500,"x_range":{"id":"38429"},"x_scale":{"id":"38433"},"y_range":{"id":"38431"},"y_scale":{"id":"38435"}},"id":"38428","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38514"},"selection_policy":{"id":"38513"}},"id":"38478","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38471","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38502"},"selection_policy":{"id":"38501"}},"id":"38473","type":"ColumnDataSource"},{"attributes":{},"id":"38511","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38465","type":"Circle"},{"attributes":{},"id":"38512","type":"AllLabels"},{"attributes":{"source":{"id":"38478"}},"id":"38482","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38479","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38480","type":"Circle"},{"attributes":{"data_source":{"id":"38487"},"glyph":{"id":"38486"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"38489"}},"id":"38488","type":"GlyphRenderer"},{"attributes":{},"id":"38393","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"38409"},{"id":"38410"},{"id":"38411"},{"id":"38412"},{"id":"38413"},{"id":"38414"},{"id":"38415"},{"id":"38416"}]},"id":"38419","type":"Toolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"38485","type":"Span"},{"attributes":{"data_source":{"id":"38478"},"glyph":{"id":"38479"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38480"},"view":{"id":"38482"}},"id":"38481","type":"GlyphRenderer"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"38486","type":"Scatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"38516"},"selection_policy":{"id":"38515"}},"id":"38487","type":"ColumnDataSource"},{"attributes":{},"id":"38435","type":"LinearScale"}],"root_ids":["38523"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"c586c30b-5d8a-435f-ac59-1e8b60345da9","root_ids":["38523"],"roots":{"38523":"c1bbaa10-063c-4ae4-9231-87c07a03fd93"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();