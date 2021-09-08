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
    
      
      
    
      var element = document.getElementById("5955b3d6-0aba-4ed8-903f-61de036faf77");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5955b3d6-0aba-4ed8-903f-61de036faf77' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6388f90b-2f9b-4f8b-9be1-8e48a524fca7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"44622","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44619"},"selection_policy":{"id":"44618"}},"id":"44560","type":"ColumnDataSource"},{"attributes":{},"id":"44623","type":"Selection"},{"attributes":{"callback":null},"id":"44508","type":"HoverTool"},{"attributes":{"source":{"id":"44560"}},"id":"44564","type":"CDSView"},{"attributes":{"overlay":{"id":"44509"}},"id":"44503","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44562","type":"VBar"},{"attributes":{"axis":{"id":"44527"},"ticker":null},"id":"44530","type":"Grid"},{"attributes":{"data_source":{"id":"44560"},"glyph":{"id":"44561"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44562"},"view":{"id":"44564"}},"id":"44563","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"44566"},"glyph":{"id":"44567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44568"},"view":{"id":"44570"}},"id":"44569","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"44542","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"44571","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44509","type":"BoxAnnotation"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44628"},"major_label_policy":{"id":"44629"},"ticker":{"id":"44606"}},"id":"44531","type":"LinearAxis"},{"attributes":{},"id":"44639","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44567","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44631"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44632"},"ticker":{"id":"44528"}},"id":"44527","type":"LinearAxis"},{"attributes":{},"id":"44504","type":"WheelZoomTool"},{"attributes":{"source":{"id":"44566"}},"id":"44570","type":"CDSView"},{"attributes":{},"id":"44528","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44621"},"selection_policy":{"id":"44620"}},"id":"44566","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44568","type":"VBar"},{"attributes":{},"id":"44640","type":"Selection"},{"attributes":{"overlay":{"id":"44510"}},"id":"44505","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"44572"},"glyph":{"id":"44573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44574"},"view":{"id":"44576"}},"id":"44575","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"44531"},"dimension":1,"ticker":null},"id":"44534","type":"Grid"},{"attributes":{"children":[[{"id":"44484"},0,0],[{"id":"44520"},0,1]]},"id":"44644","type":"GridBox"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"44577","type":"Span"},{"attributes":{"text":"mu"},"id":"44608","type":"Title"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"44614"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"44615"},"ticker":{"id":"44494"}},"id":"44493","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44573","type":"VBar"},{"attributes":{},"id":"44614","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44555","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"44501"},{"id":"44502"},{"id":"44503"},{"id":"44504"},{"id":"44505"},{"id":"44506"},{"id":"44507"},{"id":"44508"}]},"id":"44511","type":"Toolbar"},{"attributes":{"overlay":{"id":"44543"}},"id":"44537","type":"BoxZoomTool"},{"attributes":{"source":{"id":"44572"}},"id":"44576","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44510","type":"PolyAnnotation"},{"attributes":{},"id":"44536","type":"PanTool"},{"attributes":{},"id":"44611","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44623"},"selection_policy":{"id":"44622"}},"id":"44572","type":"ColumnDataSource"},{"attributes":{},"id":"44535","type":"ResetTool"},{"attributes":{},"id":"44502","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44574","type":"VBar"},{"attributes":{},"id":"44541","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"44511"},{"id":"44545"}],"tools":[{"id":"44501"},{"id":"44502"},{"id":"44503"},{"id":"44504"},{"id":"44505"},{"id":"44506"},{"id":"44507"},{"id":"44508"},{"id":"44535"},{"id":"44536"},{"id":"44537"},{"id":"44538"},{"id":"44539"},{"id":"44540"},{"id":"44541"},{"id":"44542"}]},"id":"44645","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44584","type":"VBar"},{"attributes":{},"id":"44538","type":"WheelZoomTool"},{"attributes":{"source":{"id":"44582"}},"id":"44586","type":"CDSView"},{"attributes":{"overlay":{"id":"44544"}},"id":"44539","type":"LassoSelectTool"},{"attributes":{},"id":"44506","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44583","type":"VBar"},{"attributes":{},"id":"44540","type":"UndoTool"},{"attributes":{},"id":"44615","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44602","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"44578","type":"FixedTicker"},{"attributes":{},"id":"44612","type":"AllLabels"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44634"},"selection_policy":{"id":"44633"}},"id":"44582","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44601","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44596","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"44587","type":"Span"},{"attributes":{"source":{"id":"44594"}},"id":"44598","type":"CDSView"},{"attributes":{"source":{"id":"44588"}},"id":"44592","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"44599","type":"Span"},{"attributes":{"source":{"id":"44600"}},"id":"44604","type":"CDSView"},{"attributes":{"axis":{"id":"44493"},"ticker":null},"id":"44496","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44590","type":"VBar"},{"attributes":{"data_source":{"id":"44600"},"glyph":{"id":"44601"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44602"},"view":{"id":"44604"}},"id":"44603","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"44611"},"major_label_policy":{"id":"44612"},"ticker":{"id":"44578"}},"id":"44497","type":"LinearAxis"},{"attributes":{"data_source":{"id":"44582"},"glyph":{"id":"44583"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44584"},"view":{"id":"44586"}},"id":"44585","type":"GlyphRenderer"},{"attributes":{},"id":"44485","type":"DataRange1d"},{"attributes":{},"id":"44525","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44640"},"selection_policy":{"id":"44639"}},"id":"44600","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44589","type":"VBar"},{"attributes":{"data_source":{"id":"44594"},"glyph":{"id":"44595"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44596"},"view":{"id":"44598"}},"id":"44597","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44636"},"selection_policy":{"id":"44635"}},"id":"44588","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"44605","type":"Span"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"44593","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44595","type":"VBar"},{"attributes":{},"id":"44491","type":"LinearScale"},{"attributes":{"data_source":{"id":"44588"},"glyph":{"id":"44589"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44590"},"view":{"id":"44592"}},"id":"44591","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"44606","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"44559","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"44543","type":"BoxAnnotation"},{"attributes":{},"id":"44633","type":"UnionRenderers"},{"attributes":{},"id":"44494","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"44645"},"toolbar_location":"above"},"id":"44646","type":"ToolbarBox"},{"attributes":{},"id":"44489","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44561","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44638"},"selection_policy":{"id":"44637"}},"id":"44594","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"44497"},"dimension":1,"ticker":null},"id":"44500","type":"Grid"},{"attributes":{},"id":"44523","type":"LinearScale"},{"attributes":{},"id":"44634","type":"Selection"},{"attributes":{},"id":"44507","type":"SaveTool"},{"attributes":{},"id":"44487","type":"DataRange1d"},{"attributes":{},"id":"44618","type":"UnionRenderers"},{"attributes":{},"id":"44501","type":"ResetTool"},{"attributes":{"children":[{"id":"44646"},{"id":"44644"}]},"id":"44647","type":"Column"},{"attributes":{},"id":"44619","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"44544","type":"PolyAnnotation"},{"attributes":{},"id":"44635","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"44617"},"selection_policy":{"id":"44616"}},"id":"44554","type":"ColumnDataSource"},{"attributes":{},"id":"44636","type":"Selection"},{"attributes":{},"id":"44620","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"44580","type":"Title"},{"attributes":{},"id":"44628","type":"BasicTickFormatter"},{"attributes":{},"id":"44621","type":"Selection"},{"attributes":{},"id":"44629","type":"AllLabels"},{"attributes":{},"id":"44631","type":"BasicTickFormatter"},{"attributes":{},"id":"44616","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"44535"},{"id":"44536"},{"id":"44537"},{"id":"44538"},{"id":"44539"},{"id":"44540"},{"id":"44541"},{"id":"44542"}]},"id":"44545","type":"Toolbar"},{"attributes":{},"id":"44637","type":"UnionRenderers"},{"attributes":{},"id":"44632","type":"AllLabels"},{"attributes":{"below":[{"id":"44493"}],"center":[{"id":"44496"},{"id":"44500"},{"id":"44559"},{"id":"44565"},{"id":"44571"},{"id":"44577"}],"height":331,"left":[{"id":"44497"}],"output_backend":"webgl","renderers":[{"id":"44557"},{"id":"44563"},{"id":"44569"},{"id":"44575"}],"title":{"id":"44580"},"toolbar":{"id":"44511"},"toolbar_location":null,"width":496,"x_range":{"id":"44485"},"x_scale":{"id":"44489"},"y_range":{"id":"44487"},"y_scale":{"id":"44491"}},"id":"44484","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"44554"},"glyph":{"id":"44555"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44556"},"view":{"id":"44558"}},"id":"44557","type":"GlyphRenderer"},{"attributes":{},"id":"44638","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"44556","type":"VBar"},{"attributes":{},"id":"44617","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"44565","type":"Span"},{"attributes":{"source":{"id":"44554"}},"id":"44558","type":"CDSView"},{"attributes":{"below":[{"id":"44527"}],"center":[{"id":"44530"},{"id":"44534"},{"id":"44587"},{"id":"44593"},{"id":"44599"},{"id":"44605"}],"height":331,"left":[{"id":"44531"}],"output_backend":"webgl","renderers":[{"id":"44585"},{"id":"44591"},{"id":"44597"},{"id":"44603"}],"title":{"id":"44608"},"toolbar":{"id":"44545"},"toolbar_location":null,"width":496,"x_range":{"id":"44485"},"x_scale":{"id":"44523"},"y_range":{"id":"44487"},"y_scale":{"id":"44525"}},"id":"44520","subtype":"Figure","type":"Plot"}],"root_ids":["44647"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6388f90b-2f9b-4f8b-9be1-8e48a524fca7","root_ids":["44647"],"roots":{"44647":"5955b3d6-0aba-4ed8-903f-61de036faf77"}}];
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