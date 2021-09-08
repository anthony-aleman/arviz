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
    
      
      
    
      var element = document.getElementById("2463c0da-aa68-4612-a861-b27d4b9a02ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2463c0da-aa68-4612-a861-b27d4b9a02ce' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9cc23768-fef2-4183-bc81-0f6a91210b63":{"defs":[],"roots":{"references":[{"attributes":{},"id":"19032","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19039","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"19031"},{"id":"19032"},{"id":"19033"},{"id":"19034"},{"id":"19035"},{"id":"19036"},{"id":"19037"},{"id":"19038"}]},"id":"19041","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19052","type":"Circle"},{"attributes":{"toolbar":{"id":"19071"},"toolbar_location":"above"},"id":"19072","type":"ToolbarBox"},{"attributes":{},"id":"19017","type":"DataRange1d"},{"attributes":{},"id":"19036","type":"UndoTool"},{"attributes":{"overlay":{"id":"19039"}},"id":"19033","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"19051","type":"Circle"},{"attributes":{},"id":"19028","type":"BasicTicker"},{"attributes":{},"id":"19024","type":"BasicTicker"},{"attributes":{"overlay":{"id":"19040"}},"id":"19035","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"19041"}],"tools":[{"id":"19031"},{"id":"19032"},{"id":"19033"},{"id":"19034"},{"id":"19035"},{"id":"19036"},{"id":"19037"},{"id":"19038"}]},"id":"19071","type":"ProxyToolbar"},{"attributes":{"source":{"id":"19050"}},"id":"19054","type":"CDSView"},{"attributes":{"axis":{"id":"19027"},"dimension":1,"ticker":null},"id":"19030","type":"Grid"},{"attributes":{"text":"sigma"},"id":"19056","type":"Title"},{"attributes":{},"id":"19021","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"19055","type":"Span"},{"attributes":{"children":[{"id":"19072"},{"id":"19070"}]},"id":"19073","type":"Column"},{"attributes":{},"id":"19031","type":"ResetTool"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"19060"},"major_label_policy":{"id":"19061"},"ticker":{"id":"19028"}},"id":"19027","type":"LinearAxis"},{"attributes":{},"id":"19065","type":"UnionRenderers"},{"attributes":{"below":[{"id":"19023"}],"center":[{"id":"19026"},{"id":"19030"}],"height":500,"left":[{"id":"19027"}],"output_backend":"webgl","renderers":[{"id":"19053"},{"id":"19055"}],"title":{"id":"19056"},"toolbar":{"id":"19041"},"toolbar_location":null,"width":500,"x_range":{"id":"19015"},"x_scale":{"id":"19019"},"y_range":{"id":"19017"},"y_scale":{"id":"19021"}},"id":"19014","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19034","type":"WheelZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"19063"},"major_label_policy":{"id":"19064"},"ticker":{"id":"19024"}},"id":"19023","type":"LinearAxis"},{"attributes":{},"id":"19015","type":"DataRange1d"},{"attributes":{},"id":"19061","type":"AllLabels"},{"attributes":{},"id":"19019","type":"LinearScale"},{"attributes":{},"id":"19037","type":"SaveTool"},{"attributes":{"callback":null},"id":"19038","type":"HoverTool"},{"attributes":{},"id":"19064","type":"AllLabels"},{"attributes":{"data_source":{"id":"19050"},"glyph":{"id":"19051"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19052"},"view":{"id":"19054"}},"id":"19053","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19040","type":"PolyAnnotation"},{"attributes":{},"id":"19063","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"19023"},"ticker":null},"id":"19026","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"19066"},"selection_policy":{"id":"19065"}},"id":"19050","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"19014"},0,0]]},"id":"19070","type":"GridBox"},{"attributes":{},"id":"19066","type":"Selection"},{"attributes":{},"id":"19060","type":"BasicTickFormatter"}],"root_ids":["19073"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"9cc23768-fef2-4183-bc81-0f6a91210b63","root_ids":["19073"],"roots":{"19073":"2463c0da-aa68-4612-a861-b27d4b9a02ce"}}];
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