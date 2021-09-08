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
    
      
      
    
      var element = document.getElementById("5a658585-f649-4b46-8ca0-4958a9eaf287");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5a658585-f649-4b46-8ca0-4958a9eaf287' but no matching script tag was found.")
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
                    
                  var docs_json = '{"df1205b4-3e73-4c38-90c9-9b7b0e92fb74":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"18895"},0,0]]},"id":"18958","type":"GridBox"},{"attributes":{"callback":null},"id":"18919","type":"HoverTool"},{"attributes":{},"id":"18950","type":"AllLabels"},{"attributes":{"source":{"id":"18937"}},"id":"18939","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"18912"},{"id":"18913"},{"id":"18914"},{"id":"18915"},{"id":"18916"},{"id":"18917"},{"id":"18918"},{"id":"18919"}]},"id":"18922","type":"Toolbar"},{"attributes":{"overlay":{"id":"18920"}},"id":"18914","type":"BoxZoomTool"},{"attributes":{},"id":"18913","type":"PanTool"},{"attributes":{},"id":"18902","type":"LinearScale"},{"attributes":{"data_source":{"id":"18931"},"glyph":{"id":"18932"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18933"},"view":{"id":"18935"}},"id":"18934","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18941","type":"Span"},{"attributes":{},"id":"18915","type":"WheelZoomTool"},{"attributes":{},"id":"18905","type":"BasicTicker"},{"attributes":{},"id":"18952","type":"Selection"},{"attributes":{"toolbars":[{"id":"18922"}],"tools":[{"id":"18912"},{"id":"18913"},{"id":"18914"},{"id":"18915"},{"id":"18916"},{"id":"18917"},{"id":"18918"},{"id":"18919"}]},"id":"18959","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"18908"},"dimension":1,"ticker":null},"id":"18911","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18946"},"major_label_policy":{"id":"18947"},"ticker":{"id":"18909"}},"id":"18908","type":"LinearAxis"},{"attributes":{},"id":"18946","type":"BasicTickFormatter"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18936","type":"Scatter"},{"attributes":{"text":"mu"},"id":"18942","type":"Title"},{"attributes":{},"id":"18898","type":"DataRange1d"},{"attributes":{},"id":"18954","type":"Selection"},{"attributes":{},"id":"18896","type":"DataRange1d"},{"attributes":{"below":[{"id":"18904"}],"center":[{"id":"18907"},{"id":"18911"}],"height":500,"left":[{"id":"18908"}],"output_backend":"webgl","renderers":[{"id":"18934"},{"id":"18938"},{"id":"18940"},{"id":"18941"}],"title":{"id":"18942"},"toolbar":{"id":"18922"},"toolbar_location":null,"width":500,"x_range":{"id":"18896"},"x_scale":{"id":"18900"},"y_range":{"id":"18898"},"y_scale":{"id":"18902"}},"id":"18895","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"18904"},"ticker":null},"id":"18907","type":"Grid"},{"attributes":{"source":{"id":"18931"}},"id":"18935","type":"CDSView"},{"attributes":{},"id":"18953","type":"UnionRenderers"},{"attributes":{},"id":"18947","type":"AllLabels"},{"attributes":{},"id":"18949","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18932","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18933","type":"Circle"},{"attributes":{"overlay":{"id":"18921"}},"id":"18916","type":"LassoSelectTool"},{"attributes":{},"id":"18900","type":"LinearScale"},{"attributes":{},"id":"18951","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18921","type":"PolyAnnotation"},{"attributes":{},"id":"18917","type":"UndoTool"},{"attributes":{"data_source":{"id":"18937"},"glyph":{"id":"18936"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18939"}},"id":"18938","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18952"},"selection_policy":{"id":"18951"}},"id":"18931","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18940","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18949"},"major_label_policy":{"id":"18950"},"ticker":{"id":"18905"}},"id":"18904","type":"LinearAxis"},{"attributes":{"children":[{"id":"18960"},{"id":"18958"}]},"id":"18961","type":"Column"},{"attributes":{},"id":"18912","type":"ResetTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18954"},"selection_policy":{"id":"18953"}},"id":"18937","type":"ColumnDataSource"},{"attributes":{},"id":"18909","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"18959"},"toolbar_location":"above"},"id":"18960","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18920","type":"BoxAnnotation"},{"attributes":{},"id":"18918","type":"SaveTool"}],"root_ids":["18961"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"df1205b4-3e73-4c38-90c9-9b7b0e92fb74","root_ids":["18961"],"roots":{"18961":"5a658585-f649-4b46-8ca0-4958a9eaf287"}}];
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