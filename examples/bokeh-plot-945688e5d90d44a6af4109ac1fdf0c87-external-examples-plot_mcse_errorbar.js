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
    
      
      
    
      var element = document.getElementById("93b3f62d-ce15-471b-9fa7-d3ff3908ec54");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93b3f62d-ce15-471b-9fa7-d3ff3908ec54' but no matching script tag was found.")
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
                    
                  var docs_json = '{"eaa86735-13bd-4fce-a7c8-cd48c5faaed3":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"38678"},"major_label_policy":{"id":"38679"},"ticker":{"id":"38642"}},"id":"38641","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"38655"}],"tools":[{"id":"38645"},{"id":"38646"},{"id":"38647"},{"id":"38648"},{"id":"38649"},{"id":"38650"},{"id":"38651"},{"id":"38652"}]},"id":"38691","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"38628"},0,0]]},"id":"38690","type":"GridBox"},{"attributes":{"text":"sigma_a"},"id":"38674","type":"Title"},{"attributes":{},"id":"38642","type":"BasicTicker"},{"attributes":{},"id":"38679","type":"AllLabels"},{"attributes":{"below":[{"id":"38637"}],"center":[{"id":"38640"},{"id":"38644"}],"height":500,"left":[{"id":"38641"}],"output_backend":"webgl","renderers":[{"id":"38667"},{"id":"38672"}],"title":{"id":"38674"},"toolbar":{"id":"38655"},"toolbar_location":null,"width":500,"x_range":{"id":"38629"},"x_scale":{"id":"38633"},"y_range":{"id":"38631"},"y_scale":{"id":"38635"}},"id":"38628","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"38692"},{"id":"38690"}]},"id":"38693","type":"Column"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"38681"},"major_label_policy":{"id":"38682"},"ticker":{"id":"38638"}},"id":"38637","type":"LinearAxis"},{"attributes":{},"id":"38635","type":"LinearScale"},{"attributes":{},"id":"38686","type":"Selection"},{"attributes":{},"id":"38638","type":"BasicTicker"},{"attributes":{"overlay":{"id":"38653"}},"id":"38647","type":"BoxZoomTool"},{"attributes":{},"id":"38681","type":"BasicTickFormatter"},{"attributes":{},"id":"38629","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"38645"},{"id":"38646"},{"id":"38647"},{"id":"38648"},{"id":"38649"},{"id":"38650"},{"id":"38651"},{"id":"38652"}]},"id":"38655","type":"Toolbar"},{"attributes":{},"id":"38682","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38666","type":"Scatter"},{"attributes":{},"id":"38651","type":"SaveTool"},{"attributes":{},"id":"38633","type":"LinearScale"},{"attributes":{"toolbar":{"id":"38691"},"toolbar_location":"above"},"id":"38692","type":"ToolbarBox"},{"attributes":{},"id":"38648","type":"WheelZoomTool"},{"attributes":{},"id":"38683","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"38671","type":"MultiLine"},{"attributes":{"source":{"id":"38664"}},"id":"38668","type":"CDSView"},{"attributes":{},"id":"38684","type":"Selection"},{"attributes":{"source":{"id":"38669"}},"id":"38673","type":"CDSView"},{"attributes":{"data_source":{"id":"38664"},"glyph":{"id":"38665"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38666"},"view":{"id":"38668"}},"id":"38667","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"38686"},"selection_policy":{"id":"38685"}},"id":"38669","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"38641"},"dimension":1,"ticker":null},"id":"38644","type":"Grid"},{"attributes":{},"id":"38685","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"38670","type":"MultiLine"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"38654","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"38652","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38665","type":"Scatter"},{"attributes":{},"id":"38646","type":"PanTool"},{"attributes":{},"id":"38631","type":"DataRange1d"},{"attributes":{"axis":{"id":"38637"},"ticker":null},"id":"38640","type":"Grid"},{"attributes":{},"id":"38678","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"38669"},"glyph":{"id":"38670"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38671"},"view":{"id":"38673"}},"id":"38672","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"38654"}},"id":"38649","type":"LassoSelectTool"},{"attributes":{},"id":"38645","type":"ResetTool"},{"attributes":{},"id":"38650","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"38653","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"38684"},"selection_policy":{"id":"38683"}},"id":"38664","type":"ColumnDataSource"}],"root_ids":["38693"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"eaa86735-13bd-4fce-a7c8-cd48c5faaed3","root_ids":["38693"],"roots":{"38693":"93b3f62d-ce15-471b-9fa7-d3ff3908ec54"}}];
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