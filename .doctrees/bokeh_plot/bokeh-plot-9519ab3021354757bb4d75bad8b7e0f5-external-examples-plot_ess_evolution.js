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
    
      
      
    
      var element = document.getElementById("db59d84c-e6f2-4d97-8018-d9e2dafa4214");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'db59d84c-e6f2-4d97-8018-d9e2dafa4214' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f60a4a42-49e4-4e96-a519-457a7963b048":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18807","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18791","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18768","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"18752"},"ticker":null},"id":"18755","type":"Grid"},{"attributes":{"data_source":{"id":"18779"},"glyph":{"id":"18780"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18781"},"view":{"id":"18783"}},"id":"18782","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18794"}},"id":"18798","type":"CDSView"},{"attributes":{"overlay":{"id":"18769"}},"id":"18764","type":"LassoSelectTool"},{"attributes":{"source":{"id":"18784"}},"id":"18788","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18785","type":"Line"},{"attributes":{},"id":"18748","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18796","type":"Circle"},{"attributes":{},"id":"18753","type":"BasicTicker"},{"attributes":{},"id":"18816","type":"UnionRenderers"},{"attributes":{},"id":"18766","type":"SaveTool"},{"attributes":{},"id":"18811","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18786","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18819"},"selection_policy":{"id":"18818"}},"id":"18794","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"18824"},"toolbar_location":"above"},"id":"18825","type":"ToolbarBox"},{"attributes":{"axis":{"id":"18756"},"dimension":1,"ticker":null},"id":"18759","type":"Grid"},{"attributes":{"data_source":{"id":"18789"},"glyph":{"id":"18790"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18791"},"view":{"id":"18793"}},"id":"18792","type":"GlyphRenderer"},{"attributes":{},"id":"18810","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"18770"}],"tools":[{"id":"18760"},{"id":"18761"},{"id":"18762"},{"id":"18763"},{"id":"18764"},{"id":"18765"},{"id":"18766"},{"id":"18767"}]},"id":"18824","type":"ProxyToolbar"},{"attributes":{},"id":"18814","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18768"}},"id":"18762","type":"BoxZoomTool"},{"attributes":{},"id":"18808","type":"AllLabels"},{"attributes":{"click_policy":"hide","items":[{"id":"18801"},{"id":"18802"}],"location":"center_right","orientation":"horizontal"},"id":"18800","type":"Legend"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18813"},"selection_policy":{"id":"18812"}},"id":"18779","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18789"}},"id":"18793","type":"CDSView"},{"attributes":{},"id":"18812","type":"UnionRenderers"},{"attributes":{},"id":"18765","type":"UndoTool"},{"attributes":{},"id":"18815","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18810"},"major_label_policy":{"id":"18811"},"ticker":{"id":"18753"}},"id":"18752","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18782"},{"id":"18787"}]},"id":"18801","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18815"},"selection_policy":{"id":"18814"}},"id":"18784","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"18800"}],"below":[{"id":"18752"}],"center":[{"id":"18755"},{"id":"18759"}],"height":500,"left":[{"id":"18756"}],"output_backend":"webgl","renderers":[{"id":"18782"},{"id":"18787"},{"id":"18792"},{"id":"18797"},{"id":"18799"}],"title":{"id":"18803"},"toolbar":{"id":"18770"},"toolbar_location":null,"width":500,"x_range":{"id":"18744"},"x_scale":{"id":"18748"},"y_range":{"id":"18746"},"y_scale":{"id":"18750"}},"id":"18743","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18781","type":"Circle"},{"attributes":{},"id":"18750","type":"LinearScale"},{"attributes":{},"id":"18817","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"18760"},{"id":"18761"},{"id":"18762"},{"id":"18763"},{"id":"18764"},{"id":"18765"},{"id":"18766"},{"id":"18767"}]},"id":"18770","type":"Toolbar"},{"attributes":{"data_source":{"id":"18784"},"glyph":{"id":"18785"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18786"},"view":{"id":"18788"}},"id":"18787","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18780","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18817"},"selection_policy":{"id":"18816"}},"id":"18789","type":"ColumnDataSource"},{"attributes":{},"id":"18746","type":"DataRange1d"},{"attributes":{},"id":"18761","type":"PanTool"},{"attributes":{},"id":"18763","type":"WheelZoomTool"},{"attributes":{},"id":"18819","type":"Selection"},{"attributes":{},"id":"18818","type":"UnionRenderers"},{"attributes":{"source":{"id":"18779"}},"id":"18783","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18790","type":"Line"},{"attributes":{},"id":"18760","type":"ResetTool"},{"attributes":{"children":[[{"id":"18743"},0,0]]},"id":"18823","type":"GridBox"},{"attributes":{"data_source":{"id":"18794"},"glyph":{"id":"18795"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18796"},"view":{"id":"18798"}},"id":"18797","type":"GlyphRenderer"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18797"},{"id":"18792"}]},"id":"18802","type":"LegendItem"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18795","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18769","type":"PolyAnnotation"},{"attributes":{"text":"b"},"id":"18803","type":"Title"},{"attributes":{},"id":"18813","type":"Selection"},{"attributes":{},"id":"18744","type":"DataRange1d"},{"attributes":{"children":[{"id":"18825"},{"id":"18823"}]},"id":"18826","type":"Column"},{"attributes":{},"id":"18757","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18767","type":"HoverTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18799","type":"Span"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18807"},"major_label_policy":{"id":"18808"},"ticker":{"id":"18757"}},"id":"18756","type":"LinearAxis"}],"root_ids":["18826"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"f60a4a42-49e4-4e96-a519-457a7963b048","root_ids":["18826"],"roots":{"18826":"db59d84c-e6f2-4d97-8018-d9e2dafa4214"}}];
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