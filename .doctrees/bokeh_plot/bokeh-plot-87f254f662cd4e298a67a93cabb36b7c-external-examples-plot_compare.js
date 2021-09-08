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
    
      
      
    
      var element = document.getElementById("343cf9b0-2702-463d-9f62-cbf7d262ace0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '343cf9b0-2702-463d-9f62-cbf7d262ace0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b9479421-844f-4e78-8469-b7c9f3569e88":{"defs":[],"roots":{"references":[{"attributes":{},"id":"16013","type":"UndoTool"},{"attributes":{},"id":"16061","type":"AllLabels"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"16069"},"selection_policy":{"id":"16068"}},"id":"16044","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16030","type":"Scatter"},{"attributes":{"source":{"id":"16029"}},"id":"16033","type":"CDSView"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16045","type":"MultiLine"},{"attributes":{"source":{"id":"16039"}},"id":"16043","type":"CDSView"},{"attributes":{"source":{"id":"16034"}},"id":"16038","type":"CDSView"},{"attributes":{"children":[{"id":"16077"},{"id":"16075"}]},"id":"16078","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"16016","type":"BoxAnnotation"},{"attributes":{},"id":"16062","type":"UnionRenderers"},{"attributes":{},"id":"15996","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16036","type":"MultiLine"},{"attributes":{},"id":"16063","type":"Selection"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"16065"},"selection_policy":{"id":"16064"}},"id":"16034","type":"ColumnDataSource"},{"attributes":{},"id":"16069","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16046","type":"MultiLine"},{"attributes":{},"id":"16070","type":"UnionRenderers"},{"attributes":{"source":{"id":"16044"}},"id":"16048","type":"CDSView"},{"attributes":{"end":0.5,"start":-1.5},"id":"15994","type":"DataRange1d"},{"attributes":{"data_source":{"id":"16034"},"glyph":{"id":"16035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16036"},"view":{"id":"16038"}},"id":"16037","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16049"},"glyph":{"id":"16050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16051"},"view":{"id":"16053"}},"id":"16052","type":"GlyphRenderer"},{"attributes":{},"id":"16071","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16031","type":"Scatter"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"16027","type":"FixedTicker"},{"attributes":{},"id":"16008","type":"ResetTool"},{"attributes":{},"id":"15998","type":"LinearScale"},{"attributes":{"overlay":{"id":"16017"}},"id":"16012","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16050","type":"Circle"},{"attributes":{},"id":"16001","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"16063"},"selection_policy":{"id":"16062"}},"id":"16029","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"16018"}],"tools":[{"id":"16008"},{"id":"16009"},{"id":"16010"},{"id":"16011"},{"id":"16012"},{"id":"16013"},{"id":"16014"},{"id":"16015"}]},"id":"16076","type":"ProxyToolbar"},{"attributes":{},"id":"16009","type":"PanTool"},{"attributes":{},"id":"16014","type":"SaveTool"},{"attributes":{"data_source":{"id":"16029"},"glyph":{"id":"16030"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16031"},"view":{"id":"16033"}},"id":"16032","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"15991"},0,0]]},"id":"16075","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"16017","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16035","type":"MultiLine"},{"attributes":{"axis_label":"Log","formatter":{"id":"16060"},"major_label_policy":{"id":"16061"},"ticker":{"id":"16001"}},"id":"16000","type":"LinearAxis"},{"attributes":{},"id":"16064","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"16054","type":"Span"},{"attributes":{},"id":"16060","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"16000"},"ticker":null},"id":"16003","type":"Grid"},{"attributes":{},"id":"16057","type":"BasicTickFormatter"},{"attributes":{},"id":"15992","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16040","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"16008"},{"id":"16009"},{"id":"16010"},{"id":"16011"},{"id":"16012"},{"id":"16013"},{"id":"16014"},{"id":"16015"}]},"id":"16018","type":"Toolbar"},{"attributes":{},"id":"16067","type":"Selection"},{"attributes":{"below":[{"id":"16000"}],"center":[{"id":"16003"},{"id":"16007"}],"height":500,"left":[{"id":"16004"}],"output_backend":"webgl","renderers":[{"id":"16032"},{"id":"16037"},{"id":"16042"},{"id":"16047"},{"id":"16052"},{"id":"16054"}],"title":{"id":"16055"},"toolbar":{"id":"16018"},"toolbar_location":null,"width":500,"x_range":{"id":"15992"},"x_scale":{"id":"15996"},"y_range":{"id":"15994"},"y_scale":{"id":"15998"}},"id":"15991","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"16015","type":"HoverTool"},{"attributes":{},"id":"16055","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16071"},"selection_policy":{"id":"16070"}},"id":"16049","type":"ColumnDataSource"},{"attributes":{},"id":"16065","type":"Selection"},{"attributes":{"toolbar":{"id":"16076"},"toolbar_location":"above"},"id":"16077","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"16057"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"16058"},"ticker":{"id":"16027"}},"id":"16004","type":"LinearAxis"},{"attributes":{"axis":{"id":"16004"},"dimension":1,"ticker":null},"id":"16007","type":"Grid"},{"attributes":{"overlay":{"id":"16016"}},"id":"16010","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"16039"},"glyph":{"id":"16040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16041"},"view":{"id":"16043"}},"id":"16042","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"16044"},"glyph":{"id":"16045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16046"},"view":{"id":"16048"}},"id":"16047","type":"GlyphRenderer"},{"attributes":{},"id":"16066","type":"UnionRenderers"},{"attributes":{},"id":"16011","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"16067"},"selection_policy":{"id":"16066"}},"id":"16039","type":"ColumnDataSource"},{"attributes":{},"id":"16068","type":"UnionRenderers"},{"attributes":{"source":{"id":"16049"}},"id":"16053","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16051","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"16041","type":"Circle"},{"attributes":{},"id":"16058","type":"AllLabels"}],"root_ids":["16078"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b9479421-844f-4e78-8469-b7c9f3569e88","root_ids":["16078"],"roots":{"16078":"343cf9b0-2702-463d-9f62-cbf7d262ace0"}}];
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