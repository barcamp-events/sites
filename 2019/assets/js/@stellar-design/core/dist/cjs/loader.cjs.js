'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy(JSON.parse("[[\"stellar-docs-component.cjs\",[[0,\"stellar-docs-component\",{\"match\":[16],\"ready\":[4],\"loader\":[16],\"data\":[32]}]]],[\"stellar-docs-page.cjs\",[[0,\"stellar-docs-page\",{\"match\":[16]}]]],[\"stellar-docs-home.cjs\",[[0,\"stellar-docs-home\"]]],[\"stellar-tester.cjs\",[[0,\"stellar-tester\",{\"form\":[32],\"select\":[32]}]]],[\"stellar-interview.cjs\",[[4,\"stellar-interview\",{\"src\":[1],\"color\":[1],\"playing\":[1028],\"width\":[1026],\"height\":[1026],\"aspectRatio\":[1026,\"aspect-ratio\"],\"visualization\":[1025],\"randomId\":[32],\"audio\":[32],\"audio_source\":[32],\"loaded\":[32],\"loading\":[32],\"visible\":[32],\"updateFunc\":[32],\"duration\":[32],\"current\":[32],\"interviewLines\":[32],\"play\":[64],\"skipTo\":[64],\"pause\":[64],\"toggle\":[64]},[[0,\"update\",\"handleUpdate\"]]]]],[\"stellar-playlist.cjs\",[[1,\"stellar-playlist\",{\"visualizationColor\":[1537,\"visualization-color\"],\"visualizationType\":[1537,\"visualization-type\"],\"autoplay\":[4],\"playlist\":[1537],\"name\":[1],\"remember\":[4],\"artwork\":[1540],\"view\":[1537],\"playing\":[1540],\"load\":[1540],\"loading\":[1540],\"dark\":[516],\"current\":[32],\"currentTrack\":[32],\"currentTime\":[32],\"duration\":[32],\"visualizer\":[32],\"audio\":[32],\"progress\":[32],\"progress_value\":[32],\"playlistItems\":[32],\"currentPlaylistItem\":[32],\"context\":[32],\"prepare\":[64],\"play\":[64],\"pause\":[64],\"next\":[64],\"previous\":[64]},[[0,\"keydown\",\"handleKeydown\"],[0,\"loaded\",\"handleSongLoaded\"]]]]],[\"stellar-pagination.cjs\",[[1,\"stellar-pagination\",{\"pages\":[1538],\"type\":[1537],\"current\":[1538],\"padding\":[1538],\"color\":[1],\"dark\":[516],\"url\":[8],\"__surroundingPages\":[32],\"__current\":[32],\"__first\":[32],\"__previous\":[32],\"__next\":[32],\"__last\":[32],\"blur\":[32],\"ease\":[32]}]]],[\"stellar-stripe.cjs\",[[0,\"stellar-stripe\",{\"token\":[1],\"name\":[1],\"input\":[32],\"stripe\":[32],\"error\":[32],\"card\":[32],\"value\":[32],\"cardData\":[32],\"state\":[32],\"connect\":[64],\"getToken\":[64],\"setError\":[64]}]]],[\"stellar-video-interview.cjs\",[[1,\"stellar-video-interview\",{\"src\":[1],\"color\":[1],\"playing\":[1028],\"width\":[1026],\"height\":[1026],\"aspectRatio\":[1026,\"aspect-ratio\"],\"visualization\":[1025],\"randomId\":[32],\"video\":[32],\"loaded\":[32],\"loading\":[32],\"seekable\":[32],\"updateFunc\":[32],\"duration\":[32],\"current\":[32],\"interviewLines\":[32],\"visible\":[32],\"context\":[32],\"visualizer\":[32],\"play\":[64],\"skipTo\":[64],\"pause\":[64],\"toggle\":[64]}]]],[\"stellar-asset-library.cjs\",[[0,\"stellar-asset-library\",{\"icons\":[32],\"kind\":[32]}]]],[\"stellar-color-library.cjs\",[[0,\"stellar-color-library\"]]],[\"stellar-toggle-option.cjs\",[[4,\"stellar-toggle-option\",{\"type\":[513],\"checked\":[1540],\"checkedDefault\":[4,\"checked-default\"],\"single\":[516],\"icon\":[516],\"tooltip\":[1025],\"disabled\":[1540],\"dark\":[516],\"for\":[1],\"name\":[1537],\"default\":[1],\"value\":[1],\"required\":[4],\"inline\":[4],\"size\":[4],\"selectedCopy\":[1,\"selected-copy\"],\"input\":[32],\"_type\":[32],\"focused\":[32],\"blur\":[32],\"ease\":[32],\"confirm\":[64],\"updateSelected\":[64]}]]],[\"stellar-breadcrumbs.cjs\",[[1,\"stellar-breadcrumbs\",{\"icon\":[1],\"icon_src\":[1],\"icon_size\":[2],\"tag\":[1],\"home\":[1],\"label\":[1],\"description\":[1],\"size\":[513],\"dark\":[516],\"color\":[1]}]]],[\"stellar-360-image.cjs\",[[0,\"stellar-360-image\",{\"src\":[513],\"nolazyload\":[4],\"poster\":[513],\"width\":[514],\"height\":[514],\"viewer\":[32],\"image\":[32],\"ready\":[32]}]]],[\"stellar-documentation.cjs\",[[0,\"stellar-documentation\",{\"package_link\":[1],\"collection_link\":[1],\"documentation_link\":[1],\"coverage_link\":[1],\"stats_link\":[1],\"ready\":[32],\"package\":[32],\"collection\":[32],\"documentation\":[32],\"coverage\":[32],\"stats\":[32],\"loader\":[32]}]]],[\"stellar-clock.cjs\",[[1,\"stellar-clock\",{\"time\":[1025],\"between\":[1025],\"size\":[2],\"animated\":[4],\"hourAngle\":[32],\"minuteAngle\":[32],\"secondAngle\":[32]}]]],[\"stellar-dropdown.cjs\",[[1,\"stellar-dropdown\",{\"position\":[1537],\"icon\":[4],\"iconName\":[1,\"icon-name\"],\"label\":[1],\"open\":[1540],\"dark\":[516],\"footer\":[32]}]]],[\"stellar-group.cjs\",[[1,\"stellar-group\",{\"size\":[1537],\"overflow\":[4],\"count\":[2],\"extras\":[32]}]]],[\"stellar-switch.cjs\",[[4,\"stellar-switch\",{\"checked\":[1540],\"checkedDefault\":[4,\"checked-default\"],\"name\":[513],\"novalidate\":[516],\"required\":[516],\"dark\":[516],\"status\":[32],\"validate\":[64],\"activate\":[64]}]]],[\"stellar-toggle.cjs\",[[4,\"stellar-toggle\",{\"type\":[1025],\"name\":[1537],\"description\":[1025],\"stacked\":[516],\"flip\":[4],\"required\":[4],\"single\":[4],\"size\":[1],\"novalidate\":[516],\"dark\":[516],\"card\":[8],\"label\":[1],\"value\":[1025],\"form\":[32],\"valid\":[32],\"error\":[32],\"status\":[32],\"validate\":[64]},[[0,\"changeToggle\",\"toggleChangedHandler\"]]]]],[\"stellar-password-requirements.cjs\",[[0,\"stellar-password-requirements\",{\"for\":[513],\"size\":[1],\"input\":[32],\"value\":[32],\"length\":[32],\"uppercase\":[32],\"number\":[32],\"symbol\":[32],\"commonPasswords\":[32],\"commonNames\":[32],\"repeated\":[32]}]]],[\"stellar-song.cjs\",[[1,\"stellar-song\",{\"src\":[1],\"playing\":[1540],\"artwork\":[4],\"_index\":[32],\"player\":[32],\"title\":[32],\"album\":[32],\"artist\":[32],\"genre\":[32],\"picture\":[32],\"error\":[32],\"load\":[64],\"details\":[64],\"preload\":[64],\"play\":[64],\"switching\":[64],\"getIndex\":[64],\"setIndex\":[64]}]]],[\"stellar-step.cjs\",[[4,\"stellar-step\",{\"href\":[1537],\"disabled\":[4],\"open\":[1540],\"order\":[514],\"tabCount\":[514,\"tab-count\"],\"parent\":[32]}]]],[\"stellar-table.cjs\",[[4,\"stellar-table\",{\"name\":[1],\"upgrade\":[4],\"chart\":[4],\"striped\":[4]},[[0,\"change\",\"tableChangeHandler\"]]]]],[\"skeleton-text.cjs\",[[0,\"skeleton-text\",{\"as\":[513],\"width\":[514],\"loading\":[516]}]]],[\"stellar-callout.cjs\",[[1,\"stellar-callout\",{\"dark\":[516],\"type\":[1],\"theme\":[32]}]]],[\"stellar-comment.cjs\",[[1,\"stellar-comment\",{\"content\":[1032],\"name\":[1032],\"dark\":[516],\"empty\":[32]}]]],[\"stellar-image.cjs\",[[1,\"stellar-image\",{\"poster\":[1025],\"large\":[1025],\"type\":[1537],\"width\":[2],\"height\":[2],\"nozoom\":[516],\"bg\":[1025],\"alt\":[1025],\"aspectRatio\":[32],\"sources\":[32],\"active\":[32],\"figure\":[32],\"zoom\":[32],\"palette\":[32],\"medium\":[64]}]]],[\"stellar-long-shadow.cjs\",[[1,\"stellar-long-shadow\",{\"direction\":[513],\"length\":[514],\"delay\":[514],\"timing\":[514],\"active\":[1540],\"children\":[32],\"out\":[64],\"in\":[64]}]]],[\"stellar-reveal.cjs\",[[4,\"stellar-reveal\",{\"direction\":[1],\"delay\":[2],\"duration\":[2],\"animationDistance\":[1,\"animation-distance\"],\"triggerDistance\":[1,\"trigger-distance\"]}]]],[\"stellar-reveal-list.cjs\",[[1,\"stellar-reveal-list\",{\"animation\":[513],\"outAnimation\":[513,\"out-animation\"],\"delay\":[514],\"timing\":[514],\"active\":[1540],\"children\":[32],\"out\":[64],\"in\":[64]}]]],[\"stellar-slides.cjs\",[[4,\"stellar-slides\",{\"options\":[8],\"effect\":[513],\"speed\":[2],\"direction\":[1],\"autoHeight\":[4,\"auto-height\"],\"nested\":[4],\"pagination\":[4],\"loop\":[4],\"watchSlidesProgress\":[4,\"watch-slides-progress\"],\"watchSlidesVisibility\":[4,\"watch-slides-visibility\"],\"slidesPerView\":[2,\"slides-per-view\"],\"centeredSlides\":[4,\"centered-slides\"],\"spaceBetween\":[2,\"space-between\"],\"pager\":[4],\"blur\":[32],\"ease\":[32],\"slides\":[32],\"update\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64]}]]],[\"ion-icon.cjs\",[[1,\"ion-icon\",{\"ariaLabel\":[1537,\"aria-label\"],\"color\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"icon\":[1],\"ios\":[1],\"lazy\":[4],\"md\":[1],\"mode\":[1],\"name\":[1],\"size\":[1],\"src\":[1],\"isVisible\":[32],\"svgContent\":[32]}]]],[\"stellar-360-video.cjs\",[[0,\"stellar-360-video\",{\"src\":[513],\"poster\":[513],\"width\":[514],\"height\":[514],\"viewer\":[32],\"video\":[32]}]]],[\"stellar-comments.cjs\",[[1,\"stellar-comments\",{\"comments\":[32]}]]],[\"stellar-context.cjs\",[[1,\"stellar-context\",{\"time\":[4],\"weather\":[4],\"apikey\":[1],\"timeState\":[32],\"weatherState\":[32]}]]],[\"stellar-docs-not-found.cjs\",[[0,\"stellar-docs-not-found\"]]],[\"stellar-follow.cjs\",[[1,\"stellar-follow\",{\"type\":[1],\"distance\":[2],\"padding\":[2]}]]],[\"stellar-interview-line.cjs\",[[4,\"stellar-interview-line\",{\"in\":[2],\"out\":[2],\"complement\":[4]}]]],[\"stellar-keyframes.cjs\",[[1,\"stellar-keyframes\",{\"src\":[1],\"width\":[2],\"height\":[2],\"frame\":[514]}]]],[\"stellar-scatter.cjs\",[[1,\"stellar-scatter\",{\"float\":[516],\"min\":[2],\"max\":[2],\"sizes\":[4],\"colors\":[4]}]]],[\"stellar-scroll-z-root.cjs\",[[1,\"stellar-scroll-z-root\",{\"initialOriginX\":[2,\"initial-origin-x\"],\"initialOriginY\":[2,\"initial-origin-y\"],\"itemZ\":[2,\"item-z\"],\"cameraSpeed\":[2,\"camera-speed\"],\"cameraZ\":[2,\"camera-z\"],\"scenePerspective\":[2,\"scene-perspective\"],\"distanceFromTop\":[32],\"distanceFromBottom\":[32],\"sections\":[32],\"perspectiveOrigin\":[32]},[[9,\"scroll\",\"moveCamera\"],[9,\"mousemove\",\"moveCameraAngle\"]]]]],[\"stellar-scroll-z-section.cjs\",[[4,\"stellar-scroll-z-section\"]]],[\"stellar-slide.cjs\",[[4,\"stellar-slide\"]]],[\"stellar-steps.cjs\",[[4,\"stellar-steps\",{\"name\":[1537],\"stepsList\":[32],\"contentsList\":[32],\"steps\":[64],\"contents\":[64]}]]],[\"stellar-story.cjs\",[[0,\"stellar-story\",{\"target\":[1]}]]],[\"stellar-time.cjs\",[[0,\"stellar-time\",{\"value\":[1],\"format\":[1],\"relative\":[4],\"instance\":[32],\"result\":[32]}]]],[\"stencil-async-content.cjs\",[[0,\"stencil-async-content\",{\"documentLocation\":[1,\"document-location\"],\"content\":[32]}]]],[\"stencil-route-title.cjs\",[[0,\"stencil-route-title\",{\"titleSuffix\":[1,\"title-suffix\"],\"pageTitle\":[1,\"page-title\"]}]]],[\"stencil-router-prompt.cjs\",[[0,\"stencil-router-prompt\",{\"when\":[4],\"message\":[1],\"history\":[16],\"unblock\":[32]}]]],[\"stencil-router-redirect.cjs\",[[0,\"stencil-router-redirect\",{\"history\":[16],\"root\":[1],\"url\":[1]}]]],[\"web-audio-debugger.cjs\",[[1,\"web-audio-debugger\",{\"count\":[2],\"history\":[32],\"addHistory\":[64]}]]],[\"web-audio-effect.cjs\",[[1,\"web-audio-effect\",{\"type\":[1],\"use\":[1],\"method\":[1],\"value\":[2],\"responds\":[1],\"midicontroller\":[2],\"axis\":[1],\"_use\":[32],\"effect\":[32],\"context\":[32],\"source\":[32],\"parent\":[32],\"attachEffect\":[64]}]]],[\"web-audio-sequencer.cjs\",[[1,\"web-audio-sequencer\",{\"name\":[1],\"autoplay\":[4],\"taps\":[2],\"tempo\":[2],\"custom\":[16],\"context\":[32],\"iterations\":[32],\"startTime\":[32],\"noteTime\":[32],\"currentTap\":[32],\"totalPlayTime\":[32],\"timer\":[32],\"play\":[64],\"stop\":[64]}]]],[\"web-audio-visualizer-shader.cjs\",[[1,\"web-audio-visualizer-shader\",{\"type\":[1]}]]],[\"stellar-avatar.cjs\",[[1,\"stellar-avatar\",{\"src\":[1],\"notooltip\":[4],\"size\":[1537],\"color\":[1537],\"name\":[1537],\"initials\":[1537],\"shape\":[1537],\"processing\":[1540],\"dark\":[516],\"colorAuto\":[32],\"colors\":[32],\"focus\":[32]}]]],[\"stellar-group-overflow.cjs\",[[1,\"stellar-group-overflow\",{\"count\":[2],\"size\":[1537]}]]],[\"stellar-breadcrumb.cjs\",[[1,\"stellar-breadcrumb\",{\"color\":[1],\"href\":[1],\"tag\":[1],\"target\":[1],\"label\":[1025],\"disabled\":[4],\"dark\":[516],\"first\":[516],\"last\":[516]}]]],[\"stellar-color-picker.cjs\",[[1,\"stellar-color-picker\",{\"val\":[1537],\"notransparent\":[4],\"dark\":[516],\"options\":[32]}]]],[\"stellar-video.cjs\",[[4,\"stellar-video\",{\"width\":[1538],\"height\":[1538],\"trackInView\":[4,\"track-in-view\"],\"preload\":[1],\"autoplay\":[4],\"muted\":[4],\"playsinline\":[4],\"poster\":[1],\"controls\":[4],\"overlay\":[4],\"video_tag\":[1040],\"playing\":[1028],\"duration\":[32],\"startTime\":[32],\"pausedTime\":[32],\"currentTime\":[32],\"interval\":[32],\"getDuration\":[64],\"play\":[64],\"pause\":[64],\"toggle\":[64],\"stop\":[64],\"skipTo\":[64]}]]],[\"stellar-code.cjs\",[[4,\"stellar-code\",{\"language\":[1537],\"simple\":[4],\"codeString\":[1,\"code-string\"],\"copy\":[4],\"expanded\":[1028],\"expandable\":[4],\"preview\":[4],\"feature\":[4],\"dark\":[516],\"copied\":[32],\"randomName\":[32],\"observer\":[32],\"code\":[32],\"raw\":[32],\"highlight\":[64],\"result\":[64],\"clipboard\":[64],\"setCode\":[64]}]]],[\"stellar-form_2.cjs\",[[4,\"stellar-theme\",{\"dark\":[4],\"light\":[4],\"body\":[4],\"system\":[4],\"base\":[1],\"complement\":[1],\"htmlEl\":[32],\"bodyEl\":[32]}],[4,\"stellar-form\",{\"ajax\":[4],\"action\":[1],\"method\":[1],\"acceptCharset\":[1,\"accept-charset\"],\"autocomplete\":[1],\"enctype\":[1],\"name\":[1],\"novalidate\":[4],\"target\":[1],\"selectors\":[32],\"register\":[64],\"refresh\":[64],\"state\":[64],\"submit_form\":[64]},[[0,\"keydown\",\"handleEnter\"]]]]],[\"stellar-chart.cjs\",[[1,\"stellar-chart\",{\"type\":[1],\"remote\":[1],\"for\":[1],\"config\":[16],\"dark\":[516],\"__chart\":[32],\"__options\":[32],\"__data\":[32],\"__highchart\":[32],\"__informant\":[32],\"options\":[64],\"get_options\":[64],\"refresh\":[64]}]]],[\"web-audio_2.cjs\",[[0,\"web-audio\",{\"name\":[1],\"autoplay\":[16],\"midi\":[16],\"debugger\":[32],\"prepared\":[32],\"context\":[32],\"gain\":[32],\"sources\":[32],\"_sources\":[32],\"_currentSource\":[32],\"keys\":[32],\"externalFiles\":[32],\"visualizers\":[32],\"previousVisualizer\":[32],\"visualizerNodes\":[32],\"source\":[64],\"get_context\":[64],\"is_prepared\":[64],\"connect_the_world\":[64]}],[1,\"web-audio-source\",{\"src\":[1537],\"name\":[1537],\"inert\":[4],\"midikey\":[1538],\"midichannel\":[1538],\"prepared\":[1028],\"effectsvolume\":[1538],\"playing\":[1028],\"webAudioWrapper\":[32],\"status\":[32],\"context\":[32],\"masterGain\":[32],\"wetGain\":[32],\"dryGain\":[32],\"channelGain\":[32],\"effects\":[32],\"source\":[32],\"buffer\":[32],\"entry\":[32],\"duration\":[32],\"startTime\":[32],\"pausedTime\":[32],\"elapsedTime\":[32],\"getBuffer\":[64],\"webAudio\":[64],\"gain\":[64],\"getDuration\":[64],\"prepare\":[64],\"play\":[64],\"skipTo\":[64],\"pause\":[64],\"toggle\":[64],\"stop\":[64],\"assignBuffer\":[64]}]]],[\"stellar-label.cjs\",[[1,\"stellar-label\",{\"for\":[1],\"underneath\":[516],\"size\":[513],\"dark\":[516]}]]],[\"stellar-content_3.cjs\",[[1,\"stellar-tab\",{\"name\":[1537],\"disabled\":[4],\"open\":[1540],\"dark\":[1540],\"notifications\":[8],\"tag\":[1],\"href\":[1],\"target\":[1],\"order\":[514],\"tabCount\":[514,\"tab-count\"],\"vertical\":[516],\"parent\":[32]},[[9,\"resize\",\"handleResize\"]]],[1,\"stellar-tabs\",{\"height\":[1],\"name\":[1537],\"noanimation\":[1540],\"size\":[513],\"block\":[516],\"vertical\":[516],\"dark\":[516],\"behavior\":[513],\"flipIndicator\":[516,\"flip-indicator\"],\"blockIndicator\":[516,\"block-indicator\"],\"tabsList\":[32],\"contentsList\":[32],\"ease\":[32],\"blur\":[32],\"tabs\":[64],\"contents\":[64],\"blurring\":[64]}],[1,\"stellar-content\",{\"open\":[1540],\"for\":[1537],\"behavior\":[1537],\"ease\":[32],\"blur\":[32],\"parent\":[32]},[[4,\"contentChange\",\"handleActive\"]]]]],[\"stencil-route_3.cjs\",[[0,\"stencil-route\",{\"group\":[513],\"componentUpdated\":[16],\"match\":[1040],\"url\":[1],\"component\":[1],\"componentProps\":[16],\"exact\":[4],\"routeRender\":[16],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"routeViewsUpdated\":[16],\"location\":[16],\"history\":[16],\"historyType\":[1,\"history-type\"]}],[4,\"stencil-route-switch\",{\"group\":[513],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[16],\"routeViewsUpdated\":[16]}],[4,\"stencil-router\",{\"root\":[1],\"historyType\":[1,\"history-type\"],\"titleSuffix\":[1,\"title-suffix\"],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[32],\"history\":[32]}]]],[\"context-consumer_13.cjs\",[[4,\"stellar-animate-text\",{\"delay\":[2],\"duration\":[2],\"method\":[1],\"words\":[4],\"phrase\":[4],\"onlyIn\":[4,\"only-in\"],\"letters\":[32],\"originalText\":[32],\"incomingHTML\":[32],\"in\":[64],\"out\":[64]}],[1,\"stellar-accordion\",{\"open\":[1540],\"tight\":[516],\"name\":[1],\"label\":[1],\"dark\":[516],\"blur\":[32],\"ease\":[32],\"expander\":[32],\"observer\":[32],\"els\":[32],\"refresh\":[64]}],[1,\"stellar-layout\",{\"type\":[513],\"size\":[513],\"padding\":[513],\"align\":[513],\"content\":[513],\"height\":[513],\"hasNav\":[516,\"has-nav\"],\"refresh\":[64]}],[1,\"stellar-card\",{\"shadow\":[1],\"flippable\":[516],\"flipped\":[1540],\"padding\":[513],\"tag\":[1],\"type\":[1],\"href\":[1],\"name\":[1],\"value\":[1],\"for\":[1],\"flip_icon\":[1],\"dark\":[516],\"ro\":[32],\"flip_card\":[64]}],[1,\"copy-wrap\",{\"align\":[513],\"full\":[516]}],[1,\"stellar-grid\",{\"cols\":[520],\"compact\":[516],\"padding\":[516],\"align\":[513],\"noresponsive\":[516],\"refresh\":[64]}],[4,\"stellar-blur\",{\"vertical\":[1538],\"horizontal\":[1538],\"generatedId\":[32],\"setBlurFilter\":[64]}],[4,\"stellar-intersection\",{\"multiple\":[4],\"in\":[16],\"out\":[16],\"margin\":[1],\"element\":[1],\"io\":[32]}],[1,\"stellar-button\",{\"tag\":[1],\"label\":[1],\"name\":[1],\"value\":[1],\"href\":[1],\"for\":[1],\"target\":[1],\"size\":[513],\"padding\":[513],\"icon\":[1540],\"active\":[516],\"disabled\":[516],\"danger\":[516],\"pill\":[516],\"block\":[516],\"outline\":[516],\"invert\":[516],\"contrast\":[516],\"dark\":[516],\"processable\":[4],\"ghost\":[516],\"processing\":[32]}],[4,\"stencil-route-link\",{\"url\":[1],\"urlMatch\":[1,\"url-match\"],\"activeClass\":[1,\"active-class\"],\"exact\":[4],\"strict\":[4],\"custom\":[1],\"anchorClass\":[1,\"anchor-class\"],\"anchorRole\":[1,\"anchor-role\"],\"anchorTitle\":[1,\"anchor-title\"],\"anchorTabIndex\":[1,\"anchor-tab-index\"],\"anchorId\":[1,\"anchor-id\"],\"history\":[16],\"location\":[16],\"root\":[1],\"ariaHaspopup\":[1,\"aria-haspopup\"],\"ariaPosinset\":[1,\"aria-posinset\"],\"ariaSetsize\":[2,\"aria-setsize\"],\"ariaLabel\":[1,\"aria-label\"],\"match\":[32]}],[1,\"stellar-asset\",{\"src\":[513],\"name\":[513],\"language\":[513],\"align\":[513],\"ariaLabel\":[1537,\"aria-label\"],\"block\":[4]}],[0,\"stellar-icon\",{\"ariaLabel\":[1537,\"aria-label\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"svgContent\":[32],\"isVisible\":[32]}],[0,\"context-consumer\",{\"context\":[16],\"renderer\":[16],\"subscribe\":[16],\"unsubscribe\":[32]}]]],[\"stellar-item.cjs\",[[1,\"stellar-item\",{\"size\":[1025],\"value\":[1537],\"valueLabel\":[1537,\"value-label\"],\"type\":[1537],\"label\":[1537],\"href\":[1537],\"wrap\":[1540],\"fit\":[1540],\"simple\":[1540],\"danger\":[1540],\"dark\":[516],\"selected\":[1540],\"multiple\":[1540],\"selectable\":[1540],\"focused\":[1540],\"selectTitle\":[1540,\"select-title\"],\"route\":[4],\"history\":[16],\"location\":[16],\"current\":[32],\"slotted\":[32],\"select\":[32],\"data\":[64],\"apply\":[64],\"setFocus\":[64],\"select_item\":[64]}]]],[\"stellar-tag.cjs\",[[1,\"stellar-tag\",{\"size\":[513],\"pill\":[516],\"outline\":[516],\"dark\":[516],\"color\":[1],\"textColor\":[1,\"text-color\"]}]]],[\"stellar-tooltip.cjs\",[[1,\"stellar-tooltip\",{\"align\":[513],\"dark\":[516],\"focused\":[516]}]]],[\"stellar-input_2.cjs\",[[1,\"stellar-input\",{\"type\":[513],\"name\":[513],\"value\":[1032],\"default\":[1544],\"requirements\":[1540],\"size\":[1537],\"color\":[1],\"dark\":[516],\"label\":[1537],\"description\":[1],\"tooltip\":[1],\"placeholder\":[1537],\"autocomplete\":[1],\"disabled\":[4],\"readonly\":[4],\"autofocus\":[4],\"focused\":[1540],\"spellcheck\":[4],\"maxlength\":[2],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"dateType\":[1,\"date-type\"],\"min\":[2],\"max\":[2],\"step\":[2],\"multipleFileCaption\":[1,\"multiple-file-caption\"],\"replace_placeholder\":[1],\"files\":[1040],\"multiple\":[4],\"droppable\":[4],\"accept\":[1],\"required\":[4],\"novalidate\":[4],\"validates\":[1],\"match\":[1],\"tokenField\":[1032,\"token-field\"],\"icon\":[1540],\"input\":[32],\"__previousValue\":[32],\"datepicker\":[32],\"_multipleFileUploadsLabel\":[32],\"_fileLabel\":[32],\"__match\":[32],\"status\":[32],\"validator\":[32],\"level\":[32],\"strength\":[32],\"generatedId\":[32],\"getDatePicker\":[64],\"getId\":[64],\"val\":[64],\"getStrength\":[64],\"setStrength\":[64],\"invalid\":[64],\"validate\":[64]},[[0,\"keydown\",\"handleKeyDown\"]]],[0,\"stellar-unit\",{\"value\":[514],\"from\":[513],\"to\":[513],\"money\":[516],\"round\":[516],\"decimals\":[514]}]]],[\"stellar-message_5.cjs\",[[1,\"stellar-message\",{\"type\":[1],\"size\":[513],\"closable\":[4],\"remember\":[4],\"name\":[1537],\"shown\":[1540],\"striped\":[516],\"dark\":[516],\"theme\":[32]}],[0,\"stellar-starscape\"],[1,\"stellar-select\",{\"name\":[1544],\"label\":[1025],\"placeholder\":[1025],\"description\":[1025],\"tooltip\":[1025],\"inline\":[1540],\"multiple\":[1540],\"other\":[4],\"placeholderInverted\":[4,\"placeholder-inverted\"],\"size\":[1537],\"required\":[4],\"processing\":[4],\"focused\":[1540],\"open\":[1540],\"footer\":[4],\"novalidate\":[4],\"verbiage\":[1],\"verbiageAn\":[4,\"verbiage-an\"],\"overlay\":[516],\"value\":[1537],\"valueLabel\":[1,\"value-label\"],\"default\":[8],\"loading\":[516],\"fit\":[516],\"wrap\":[516],\"resize\":[516],\"autoSelectFirst\":[516,\"auto-select-first\"],\"dark\":[516],\"titleItem\":[32],\"status\":[32],\"blur\":[32],\"observer\":[32],\"language\":[32],\"clear_confirm\":[32],\"update_values\":[64],\"validate\":[64],\"option_elements\":[64],\"options\":[64]},[[0,\"mounted\",\"mountedHandler\"],[0,\"selectionChanged\",\"selectionChangedHandler\"],[0,\"focusChanged\",\"selectedFocusChangedHandler\"],[0,\"blurChanged\",\"selectedBlurChangedHandler\"],[8,\"click\",\"handleNotClick\"],[0,\"keydown\",\"handleEscapeKey\"],[0,\"keydown\",\"handleArrowKeys\"]]],[4,\"stellar-parallax\",{\"horizontal\":[4],\"center\":[4],\"relax\":[32],\"reload\":[64]}],[4,\"stellar-parallax-section\",{\"speed\":[2],\"percentage\":[2],\"layer\":[2]}]]],[\"stellar-docs-header_3.cjs\",[[0,\"stellar-markdown\",{\"src\":[1],\"codeString\":[1025,\"code-string\"],\"flavor\":[1],\"editable\":[4],\"converted\":[32],\"raw\":[32],\"showdown\":[32]}],[4,\"stellar-docs-header\",{\"theme\":[1025],\"complement\":[1025],\"mark\":[1],\"max\":[2],\"value\":[2],\"package\":[8],\"ready\":[4]}],[0,\"stellar-docs-navigation\",{\"loader\":[8],\"collection\":[8],\"documentation\":[8],\"ready\":[8]}]]],[\"skeleton-img_3.cjs\",[[1,\"stellar-progress\",{\"slender\":[516],\"max\":[514],\"indeterminate\":[516],\"dark\":[516],\"editable\":[516],\"noease\":[516],\"rounded\":[516],\"value\":[1538],\"secondary\":[1538],\"blurable\":[4],\"wrapper\":[32],\"blur\":[32],\"ease\":[32]}],[1,\"web-audio-visualizer\",{\"for\":[1537],\"type\":[1537],\"smoothing\":[2],\"size\":[2],\"color\":[1],\"width\":[1538],\"height\":[1538],\"analyser\":[1040],\"renderer\":[16],\"_color\":[1032],\"canvas\":[32],\"canvasCTX\":[32],\"freqs\":[32],\"times\":[32],\"context\":[32],\"vertex\":[32],\"vertexShader\":[32],\"fragment\":[32],\"fragShader\":[32],\"fragTime\":[32],\"fragSpectrumArray\":[32],\"fragSpectrum\":[32],\"_bufferLength\":[32],\"_dataArray\":[32],\"connect\":[64]}],[0,\"skeleton-img\",{\"width\":[514],\"height\":[514],\"block\":[516],\"loading\":[516],\"icon\":[516]}]]]]"), options);
  });
};

exports.defineCustomElements = defineCustomElements;
