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
    
      
      
    
      var element = document.getElementById("99e21db5-201e-45c7-9aa7-cf3b5315a50d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '99e21db5-201e-45c7-9aa7-cf3b5315a50d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9db3fee1-e664-4fa8-8357-35a3f068c901":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21559","type":"BoxAnnotation"},{"attributes":{},"id":"21594","type":"AllLabels"},{"attributes":{"toolbar":{"id":"21605"},"toolbar_location":"above"},"id":"21606","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"21560"}},"id":"21555","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"21580"},"glyph":{"id":"21581"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21582"},"view":{"id":"21584"}},"id":"21583","type":"GlyphRenderer"},{"attributes":{},"id":"21554","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"21590"},"major_label_policy":{"id":"21591"},"ticker":{"id":"21548"}},"id":"21547","type":"LinearAxis"},{"attributes":{},"id":"21587","type":"Title"},{"attributes":{},"id":"21551","type":"ResetTool"},{"attributes":{},"id":"21597","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"21575"},"glyph":{"id":"21576"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21577"},"view":{"id":"21579"}},"id":"21578","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[524]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[524]}},"selected":{"id":"21596"},"selection_policy":{"id":"21595"}},"id":"21570","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"21551"},{"id":"21552"},{"id":"21553"},{"id":"21554"},{"id":"21555"},{"id":"21556"},{"id":"21557"},{"id":"21558"}]},"id":"21561","type":"Toolbar"},{"attributes":{},"id":"21591","type":"AllLabels"},{"attributes":{"below":[{"id":"21543"}],"center":[{"id":"21546"},{"id":"21550"}],"height":500,"left":[{"id":"21547"}],"output_backend":"webgl","renderers":[{"id":"21573"},{"id":"21578"},{"id":"21583"}],"title":{"id":"21587"},"toolbar":{"id":"21561"},"toolbar_location":null,"width":500,"x_range":{"id":"21585"},"x_scale":{"id":"21539"},"y_range":{"id":"21586"},"y_scale":{"id":"21541"}},"id":"21534","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21560","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21572","type":"Patch"},{"attributes":{"source":{"id":"21580"}},"id":"21584","type":"CDSView"},{"attributes":{},"id":"21556","type":"UndoTool"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21581","type":"Patch"},{"attributes":{"axis":{"id":"21547"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21550","type":"Grid"},{"attributes":{},"id":"21600","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21582","type":"Patch"},{"attributes":{"axis":{"id":"21543"},"grid_line_color":null,"ticker":null},"id":"21546","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"0lP1TGWJ8D9w3ULFSo7wP5vCgo02tPA/2Odd8L7u8D8aWYTEuzDxP+nTm4oIkvE/9D71FznB8T+0T3tnIRXyPxLJeFlWqvI/fKCnaif08j8a/j44xFPzP+MLjkZrHvQ/AAJavRUn9D+KNfTgdQX1P4RjDBAEWvU/qjRwfqz89T8Ixb5i8oz2P5l2VxPuGvc/jCZxteC/9z8sXAFtnXD4PxSIIwjP8vg/0BTc34Tj+T+Y6dVavSX6PxxLiK2rWPs/4ctoxWNz+z+krDoAmov8PylZqvhIO/0/KA7tUoi+/T+sb5+ldvH+P4z5XivUPP8/mOgofDISAEBaGYKlqasAQAXgXCgm3wBAHkrbziBFAUDgejT4l94BQKKrjSEPeAJAZtzmSoYRA0AoDUB0/aoDQOo9mZ10RARArG7yxuvdBEBun0vwYncFQDLQpBnaEAZAulff9pgxBkD0AP5CUaoGQDmKftwZ/AZAtjFXbMhDB0AGQ3EjSm4HQE6TIAE20AdAemKwlT/dB0Ay/gF5XCIIQKcr2rfwTQhAL4727DlXCECt47KtdEsIQOxjc0JDMghAiFAjeyYLCEB6YrCVP90HQMZha0EE2AdAnLOPo+yiB0AbxMsf6WEHQLYxV2zIQwdAQO7DcHsQB0B5EvWBR7AGQPQA/kJRqgZAqSCcAVE+BkAy0KQZ2hAGQJSeWHgivQVAbp9L8GJ3BUAoliAakjAFQKxu8sbr3QRA4tZohmydBEDqPZmddEQEQBaIhTU5/QNAKA1AdP2qA0BWV0n2SzcDQGbc5kqGEQNAoquNIQ94AkAfE3/NICYCQOB6NPiX3gFAHkrbziBFAUBS4TRDtBgBQFoZgqWpqwBAmOgofDISAEAyD6fgJZT/P6xvn6V28f4/KA7tUoi+/T+krDoAmov8PxxLiK2rWPs/y2zTEaNV+z+Y6dVavSX6PxSIIwjP8vg/jCZxteC/9z86Wpd74gX3PwjFvmLyjPY/hGMMEARa9T8AAlq9FSf0P7sT+7Z/H/Q/fKCnaif08j8XcajeH4zyP/Q+9Rc5wfE/TB1WDW6R8T8BRlfIryPxP97HZLNcyfA/cN1CxUqO8D/SU/VMZYnwPw==","dtype":"float64","order":"little","shape":[104]},"y":{"__ndarray__":"2Ajujshg+j8zU+oFun/6P6QDynJ7ifs/dP6lVi6y/D9A+YE64dr9Pwz0XR6UA/8/9IYQuA1v/z9s9xyBIxYAQNT0CvN8qgBAP7q8WvfrAEA68vhk1j4BQKDv5tYv0wFAHUDTCu3YAUAG7dRIiWcCQIqIxGFlmgJAburCuuL7AkBAVcF/xUcDQNTnsCw8kANAGGrLoujZA0A65Z6elSQEQKdXJ/THWgRAoOKMEO+4BECGcJf3j9MEQMngIOw5RAVACOB6gkhNBUBtWHLo4aoFQG7daPSh4QVAv+LlGHQJBkDApP47+WAGQNTaVmb7dQZAEBAzGPqvBkD4oN4ScvcGQDzYRNhUCgdACLGPyuMuB0DyCMKnA1EHQHBPZZD9ZgdAkRiovtNzB0CO34y4FnMHQLH3nzfFbgdAjHnyyJVqB0BG8aE5HVQHQMQ77oSHGwdAPNhE2FQKB0CAWocWV70GQNTaVmb7dQZA34BNSdobBkBu3Wj0oeEFQAjgeoJITQVALAnCJlY1BUCg4owQ77gEQDrlnp6VJARA1OewLDyQA0Bu6sK64vsCQAbt1EiJZwJAoO/m1i/TAUDAoky53U4BQDry+GTWPgFA1PQK83yqAEBs9xyBIxYAQPj57QH3uv8/DPRdHpQD/z9A+YE64dr9P0BRNc4tyv0/c/6lVi6y/D+XreErwEj8P6QDynJ7ifs/Cy20aHv4+j/YCO6OyGD6Pyi/b+w3v/k/DA4SqxU4+T/jsgHJf5P4PzwTNsdiD/g/WdCNPIOF9z9wGFrjr+b2P4AKX1UrsvY/acmBe8QS9j+kHX7//L31P4R2tNTCb/U/oL1h62/A9D/YIqIbSpX0P/iJyw06K/Q/1OSiSq2l8z8IKMY3l2zzP+8iQdLqKvM/JoFCzoPN8j9iJ0IrwYXyP0hSUp5HRPI/PC3qU+RD8j97R2aKdBzyPxKZcDE/GfI/n8R8NAss8j88LepT5EPyP5z+CMFSVvI/DFx935C18j83JjVwj2fzPwgoxjeXbPM/ZuBLkWxH9D/YIqIbSpX0P0KoqMgRbvU/pB1+//y99T9wGFrjr+b2PzwTNsdiD/g/DA4SqxU4+T/YCO6OyGD6Pw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"21600"},"selection_policy":{"id":"21599"}},"id":"21580","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"21534"},0,0]]},"id":"21604","type":"GridBox"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21576","type":"Patch"},{"attributes":{"toolbars":[{"id":"21561"}],"tools":[{"id":"21551"},{"id":"21552"},{"id":"21553"},{"id":"21554"},{"id":"21555"},{"id":"21556"},{"id":"21557"},{"id":"21558"}]},"id":"21605","type":"ProxyToolbar"},{"attributes":{},"id":"21541","type":"LinearScale"},{"attributes":{},"id":"21552","type":"PanTool"},{"attributes":{"end":6.212111123150026,"start":-2.9872898163836465},"id":"21586","type":"Range1d"},{"attributes":{"source":{"id":"21570"}},"id":"21574","type":"CDSView"},{"attributes":{},"id":"21548","type":"BasicTicker"},{"attributes":{},"id":"21593","type":"BasicTickFormatter"},{"attributes":{},"id":"21595","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"21593"},"major_label_policy":{"id":"21594"},"ticker":{"id":"21544"}},"id":"21543","type":"LinearAxis"},{"attributes":{"children":[{"id":"21606"},{"id":"21604"}]},"id":"21607","type":"Column"},{"attributes":{},"id":"21598","type":"Selection"},{"attributes":{"overlay":{"id":"21559"}},"id":"21553","type":"BoxZoomTool"},{"attributes":{},"id":"21544","type":"BasicTicker"},{"attributes":{"source":{"id":"21575"}},"id":"21579","type":"CDSView"},{"attributes":{"end":6.654812811021622,"start":-2.861845042453841},"id":"21585","type":"Range1d"},{"attributes":{},"id":"21596","type":"Selection"},{"attributes":{},"id":"21557","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[312]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[312]}},"selected":{"id":"21598"},"selection_policy":{"id":"21597"}},"id":"21575","type":"ColumnDataSource"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21571","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21577","type":"Patch"},{"attributes":{"callback":null},"id":"21558","type":"HoverTool"},{"attributes":{},"id":"21599","type":"UnionRenderers"},{"attributes":{},"id":"21590","type":"BasicTickFormatter"},{"attributes":{},"id":"21539","type":"LinearScale"},{"attributes":{"data_source":{"id":"21570"},"glyph":{"id":"21571"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21572"},"view":{"id":"21574"}},"id":"21573","type":"GlyphRenderer"}],"root_ids":["21607"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"9db3fee1-e664-4fa8-8357-35a3f068c901","root_ids":["21607"],"roots":{"21607":"99e21db5-201e-45c7-9aa7-cf3b5315a50d"}}];
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