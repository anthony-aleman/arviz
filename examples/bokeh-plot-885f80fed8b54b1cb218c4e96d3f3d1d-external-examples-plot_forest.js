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
    
      
      
    
      var element = document.getElementById("3c4e7a35-fe46-4759-8d2b-081fc2c6d902");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3c4e7a35-fe46-4759-8d2b-081fc2c6d902' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b590d4b7-8098-4171-be5b-321bdc29f381":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"19254"}},"id":"19258","type":"CDSView"},{"attributes":{},"id":"19298","type":"Selection"},{"attributes":{"data_source":{"id":"19159"},"glyph":{"id":"19160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19161"},"view":{"id":"19163"}},"id":"19162","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19246","type":"Line"},{"attributes":{},"id":"19292","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"19274","type":"Title"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"19157"},{"id":"19162"},{"id":"19167"},{"id":"19172"},{"id":"19177"},{"id":"19182"},{"id":"19187"},{"id":"19192"},{"id":"19197"},{"id":"19202"},{"id":"19207"},{"id":"19212"}]},"id":"19281","type":"LegendItem"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"19292"},"selection_policy":{"id":"19291"}},"id":"19159","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19239"}},"id":"19243","type":"CDSView"},{"attributes":{"source":{"id":"19154"}},"id":"19158","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19265","type":"Line"},{"attributes":{},"id":"19327","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19234"},"glyph":{"id":"19235"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19236"},"view":{"id":"19238"}},"id":"19237","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19190","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19251","type":"Line"},{"attributes":{},"id":"19311","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19259"},"glyph":{"id":"19260"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19261"},"view":{"id":"19263"}},"id":"19262","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19181","type":"Circle"},{"attributes":{},"id":"19317","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"19294"},"selection_policy":{"id":"19293"}},"id":"19164","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19235","type":"Line"},{"attributes":{},"id":"19294","type":"Selection"},{"attributes":{"data_source":{"id":"19164"},"glyph":{"id":"19165"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19166"},"view":{"id":"19168"}},"id":"19167","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"19300"},"selection_policy":{"id":"19299"}},"id":"19179","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19179"},"glyph":{"id":"19180"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19181"},"view":{"id":"19183"}},"id":"19182","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19230","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"19326"},"selection_policy":{"id":"19325"}},"id":"19244","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19166","type":"Circle"},{"attributes":{},"id":"19334","type":"Selection"},{"attributes":{"data_source":{"id":"19254"},"glyph":{"id":"19255"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19256"},"view":{"id":"19258"}},"id":"19257","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"19180","type":"Circle"},{"attributes":{"data_source":{"id":"19239"},"glyph":{"id":"19240"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19241"},"view":{"id":"19243"}},"id":"19242","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19270","type":"Circle"},{"attributes":{},"id":"19290","type":"Selection"},{"attributes":{},"id":"19308","type":"Selection"},{"attributes":{},"id":"19331","type":"UnionRenderers"},{"attributes":{"source":{"id":"19234"}},"id":"19238","type":"CDSView"},{"attributes":{"data_source":{"id":"19184"},"glyph":{"id":"19185"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19186"},"view":{"id":"19188"}},"id":"19187","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"19342"},{"id":"19340"}]},"id":"19343","type":"Column"},{"attributes":{"active_multi":null,"tools":[{"id":"19135"},{"id":"19136"},{"id":"19137"},{"id":"19138"},{"id":"19139"},{"id":"19140"},{"id":"19141"},{"id":"19142"}]},"id":"19145","type":"Toolbar"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19185","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19266","type":"Line"},{"attributes":{"source":{"id":"19229"}},"id":"19233","type":"CDSView"},{"attributes":{"bounds":"auto","min_interval":1},"id":"19276","type":"DataRange1d"},{"attributes":{"data_source":{"id":"19199"},"glyph":{"id":"19200"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19201"},"view":{"id":"19203"}},"id":"19202","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19186","type":"Line"},{"attributes":{"source":{"id":"19269"}},"id":"19273","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19261","type":"Line"},{"attributes":{},"id":"19309","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19161","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19231","type":"Line"},{"attributes":{},"id":"19314","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19156","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19240","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"19271","type":"Circle"},{"attributes":{},"id":"19312","type":"Selection"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"19304"},"selection_policy":{"id":"19303"}},"id":"19189","type":"ColumnDataSource"},{"attributes":{},"id":"19295","type":"UnionRenderers"},{"attributes":{},"id":"19329","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19269"},"glyph":{"id":"19270"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19271"},"view":{"id":"19273"}},"id":"19272","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"19336"},"selection_policy":{"id":"19335"}},"id":"19269","type":"ColumnDataSource"},{"attributes":{},"id":"19330","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19250","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19260","type":"Line"},{"attributes":{"data_source":{"id":"19244"},"glyph":{"id":"19245"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19246"},"view":{"id":"19248"}},"id":"19247","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19189"},"glyph":{"id":"19190"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19191"},"view":{"id":"19193"}},"id":"19192","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"19328"},"selection_policy":{"id":"19327"}},"id":"19249","type":"ColumnDataSource"},{"attributes":{"source":{"id":"19184"}},"id":"19188","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19245","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19256","type":"Circle"},{"attributes":{},"id":"19293","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"19302"},"selection_policy":{"id":"19301"}},"id":"19184","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19249"},"glyph":{"id":"19250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19251"},"view":{"id":"19253"}},"id":"19252","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19159"}},"id":"19163","type":"CDSView"},{"attributes":{},"id":"19336","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"19255","type":"Circle"},{"attributes":{"source":{"id":"19244"}},"id":"19248","type":"CDSView"},{"attributes":{},"id":"19335","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"19145"}],"tools":[{"id":"19135"},{"id":"19136"},{"id":"19137"},{"id":"19138"},{"id":"19139"},{"id":"19140"},{"id":"19141"},{"id":"19142"}]},"id":"19341","type":"ProxyToolbar"},{"attributes":{},"id":"19316","type":"Selection"},{"attributes":{},"id":"19297","type":"UnionRenderers"},{"attributes":{"source":{"id":"19224"}},"id":"19228","type":"CDSView"},{"attributes":{},"id":"19310","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"19322"},"selection_policy":{"id":"19321"}},"id":"19234","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"19324"},"selection_policy":{"id":"19323"}},"id":"19239","type":"ColumnDataSource"},{"attributes":{},"id":"19328","type":"Selection"},{"attributes":{"source":{"id":"19264"}},"id":"19268","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19210","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19155","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"19334"},"selection_policy":{"id":"19333"}},"id":"19264","type":"ColumnDataSource"},{"attributes":{},"id":"19313","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"19165","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"19330"},"selection_policy":{"id":"19329"}},"id":"19254","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19264"},"glyph":{"id":"19265"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19266"},"view":{"id":"19268"}},"id":"19267","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19236","type":"Line"},{"attributes":{},"id":"19315","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"19320"},"selection_policy":{"id":"19319"}},"id":"19229","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"19241","type":"Circle"},{"attributes":{},"id":"19296","type":"Selection"},{"attributes":{},"id":"19332","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19160","type":"Line"},{"attributes":{"source":{"id":"19259"}},"id":"19263","type":"CDSView"},{"attributes":{"source":{"id":"19249"}},"id":"19253","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"19332"},"selection_policy":{"id":"19331"}},"id":"19259","type":"ColumnDataSource"},{"attributes":{},"id":"19289","type":"UnionRenderers"},{"attributes":{"source":{"id":"19179"}},"id":"19183","type":"CDSView"},{"attributes":{"source":{"id":"19164"}},"id":"19168","type":"CDSView"},{"attributes":{},"id":"19291","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19169"},"glyph":{"id":"19170"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19171"},"view":{"id":"19173"}},"id":"19172","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"19118"},0,0]]},"id":"19340","type":"GridBox"},{"attributes":{},"id":"19333","type":"UnionRenderers"},{"attributes":{"axis":{"id":"19127"},"ticker":null},"id":"19130","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19206","type":"Line"},{"attributes":{"data_source":{"id":"19174"},"glyph":{"id":"19175"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19176"},"view":{"id":"19178"}},"id":"19177","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19219"},"glyph":{"id":"19220"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19221"},"view":{"id":"19223"}},"id":"19222","type":"GlyphRenderer"},{"attributes":{},"id":"19299","type":"UnionRenderers"},{"attributes":{"source":{"id":"19209"}},"id":"19213","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"19312"},"selection_policy":{"id":"19311"}},"id":"19209","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"19144","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"19194"},"glyph":{"id":"19195"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19196"},"view":{"id":"19198"}},"id":"19197","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"19318"},"selection_policy":{"id":"19317"}},"id":"19224","type":"ColumnDataSource"},{"attributes":{},"id":"19300","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"19281"},{"id":"19282"}],"location":"top_left"},"id":"19280","type":"Legend"},{"attributes":{"data_source":{"id":"19204"},"glyph":{"id":"19205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19206"},"view":{"id":"19208"}},"id":"19207","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19205","type":"Line"},{"attributes":{},"id":"19306","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19215","type":"Line"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"19290"},"selection_policy":{"id":"19289"}},"id":"19154","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"19296"},"selection_policy":{"id":"19295"}},"id":"19169","type":"ColumnDataSource"},{"attributes":{},"id":"19322","type":"Selection"},{"attributes":{},"id":"19138","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19216","type":"Line"},{"attributes":{"data_source":{"id":"19209"},"glyph":{"id":"19210"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19211"},"view":{"id":"19213"}},"id":"19212","type":"GlyphRenderer"},{"attributes":{},"id":"19302","type":"Selection"},{"attributes":{},"id":"19135","type":"ResetTool"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"19314"},"selection_policy":{"id":"19313"}},"id":"19214","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19310"},"selection_policy":{"id":"19309"}},"id":"19204","type":"ColumnDataSource"},{"attributes":{},"id":"19284","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"19214"}},"id":"19218","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19226","type":"Circle"},{"attributes":{},"id":"19141","type":"SaveTool"},{"attributes":{"source":{"id":"19169"}},"id":"19173","type":"CDSView"},{"attributes":{},"id":"19323","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19224"},"glyph":{"id":"19225"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19226"},"view":{"id":"19228"}},"id":"19227","type":"GlyphRenderer"},{"attributes":{},"id":"19123","type":"LinearScale"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"19217"},{"id":"19222"},{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"}]},"id":"19282","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19191","type":"Line"},{"attributes":{"axis":{"id":"19131"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"19134","type":"Grid"},{"attributes":{},"id":"19325","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19229"},"glyph":{"id":"19230"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19231"},"view":{"id":"19233"}},"id":"19232","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"19287"},"major_label_policy":{"id":"19288"},"ticker":{"id":"19128"}},"id":"19127","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"19225","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19221","type":"Line"},{"attributes":{},"id":"19125","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19195","type":"Circle"},{"attributes":{"overlay":{"id":"19144"}},"id":"19139","type":"LassoSelectTool"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19220","type":"Line"},{"attributes":{},"id":"19318","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"19143","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"19284"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"19285"},"ticker":{"id":"19278"}},"id":"19131","type":"LinearAxis"},{"attributes":{},"id":"19301","type":"UnionRenderers"},{"attributes":{"ticks":[1.275]},"id":"19278","type":"FixedTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19176","type":"Line"},{"attributes":{"toolbar":{"id":"19341"},"toolbar_location":"above"},"id":"19342","type":"ToolbarBox"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19200","type":"Line"},{"attributes":{"overlay":{"id":"19143"}},"id":"19137","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19201","type":"Line"},{"attributes":{},"id":"19319","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"19277","type":"DataRange1d"},{"attributes":{"callback":null},"id":"19142","type":"HoverTool"},{"attributes":{},"id":"19287","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"19199"}},"id":"19203","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"19308"},"selection_policy":{"id":"19307"}},"id":"19199","type":"ColumnDataSource"},{"attributes":{},"id":"19307","type":"UnionRenderers"},{"attributes":{},"id":"19324","type":"Selection"},{"attributes":{},"id":"19304","type":"Selection"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"19298"},"selection_policy":{"id":"19297"}},"id":"19174","type":"ColumnDataSource"},{"attributes":{},"id":"19303","type":"UnionRenderers"},{"attributes":{"source":{"id":"19174"}},"id":"19178","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"19196","type":"Circle"},{"attributes":{},"id":"19305","type":"UnionRenderers"},{"attributes":{"source":{"id":"19219"}},"id":"19223","type":"CDSView"},{"attributes":{"source":{"id":"19189"}},"id":"19193","type":"CDSView"},{"attributes":{},"id":"19321","type":"UnionRenderers"},{"attributes":{"source":{"id":"19194"}},"id":"19198","type":"CDSView"},{"attributes":{"above":[{"id":"19280"}],"below":[{"id":"19127"}],"center":[{"id":"19130"},{"id":"19134"}],"height":348,"left":[{"id":"19131"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"19157"},{"id":"19162"},{"id":"19167"},{"id":"19172"},{"id":"19177"},{"id":"19182"},{"id":"19187"},{"id":"19192"},{"id":"19197"},{"id":"19202"},{"id":"19207"},{"id":"19212"},{"id":"19217"},{"id":"19222"},{"id":"19227"},{"id":"19232"},{"id":"19237"},{"id":"19242"},{"id":"19247"},{"id":"19252"},{"id":"19257"},{"id":"19262"},{"id":"19267"},{"id":"19272"}],"title":{"id":"19274"},"toolbar":{"id":"19145"},"toolbar_location":null,"width":450,"x_range":{"id":"19276"},"x_scale":{"id":"19123"},"y_range":{"id":"19277"},"y_scale":{"id":"19125"}},"id":"19118","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19128","type":"BasicTicker"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19170","type":"Line"},{"attributes":{},"id":"19288","type":"AllLabels"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"19175","type":"Line"},{"attributes":{},"id":"19285","type":"AllLabels"},{"attributes":{},"id":"19140","type":"UndoTool"},{"attributes":{"data_source":{"id":"19154"},"glyph":{"id":"19155"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19156"},"view":{"id":"19158"}},"id":"19157","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19204"}},"id":"19208","type":"CDSView"},{"attributes":{},"id":"19326","type":"Selection"},{"attributes":{},"id":"19136","type":"PanTool"},{"attributes":{"data_source":{"id":"19214"},"glyph":{"id":"19215"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19216"},"view":{"id":"19218"}},"id":"19217","type":"GlyphRenderer"},{"attributes":{},"id":"19320","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"19306"},"selection_policy":{"id":"19305"}},"id":"19194","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"19316"},"selection_policy":{"id":"19315"}},"id":"19219","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"19211","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"19171","type":"Line"}],"root_ids":["19343"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b590d4b7-8098-4171-be5b-321bdc29f381","root_ids":["19343"],"roots":{"19343":"3c4e7a35-fe46-4759-8d2b-081fc2c6d902"}}];
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