(function (wp) {
  var el = wp.element.createElement;
  var InspectorControls = wp.blockEditor.InspectorControls;
  var PanelBody = wp.components.PanelBody;
  var SelectControl = wp.components.SelectControl;
  var RangeControl = wp.components.RangeControl;
  var addFilter = wp.hooks.addFilter;

  // Full list of AOS animations
  var aosAnimations = [
    { label: "None", value: "" },
    { label: "Fade", value: "fade" },
    { label: "Fade Up", value: "fade-up" },
    { label: "Fade Down", value: "fade-down" },
    { label: "Fade Left", value: "fade-left" },
    { label: "Fade Right", value: "fade-right" },
    { label: "Fade Up Right", value: "fade-up-right" },
    { label: "Fade Up Left", value: "fade-up-left" },
    { label: "Fade Down Right", value: "fade-down-right" },
    { label: "Fade Down Left", value: "fade-down-left" },
    { label: "Flip Up", value: "flip-up" },
    { label: "Flip Down", value: "flip-down" },
    { label: "Flip Left", value: "flip-left" },
    { label: "Flip Right", value: "flip-right" },
    { label: "Slide Up", value: "slide-up" },
    { label: "Slide Down", value: "slide-down" },
    { label: "Slide Left", value: "slide-left" },
    { label: "Slide Right", value: "slide-right" },
    { label: "Zoom In", value: "zoom-in" },
    { label: "Zoom In Up", value: "zoom-in-up" },
    { label: "Zoom In Down", value: "zoom-in-down" },
    { label: "Zoom In Left", value: "zoom-in-left" },
    { label: "Zoom In Right", value: "zoom-in-right" },
    { label: "Zoom Out", value: "zoom-out" },
    { label: "Zoom Out Up", value: "zoom-out-up" },
    { label: "Zoom Out Down", value: "zoom-out-down" },
    { label: "Zoom Out Left", value: "zoom-out-left" },
    { label: "Zoom Out Right", value: "zoom-out-right" },
  ];

  // Function to add AOS attribute to block settings
  function addAOSAttribute(settings) {
    if (typeof settings.attributes !== "undefined") {
      settings.attributes = Object.assign(settings.attributes, {
        aosAnimation: {
          type: "string",
          default: "",
        },
        aosDuration: {
          type: "number",
          default: 400, // Default AOS duration, you can set your own default
        },
      });
    }

    return settings;
  }
  // Higher Order Component to add AOS controls to Inspector
  var withAOSControl = wp.compose.createHigherOrderComponent(function (
    BlockEdit
  ) {
    return function (props) {
      return el(
        wp.element.Fragment,
        {},
        el(BlockEdit, props),
        el(
          InspectorControls,
          {},
          el(
            PanelBody,
            {
              title: "AOS Animation Settings",
              initialOpen: true,
              className: "block-editor-block-inspector__advanced", // Optional: Add specific classes if needed
            },
            el(SelectControl, {
              label: "AOS Animation",
              value: props.attributes.aosAnimation,
              options: aosAnimations,
              onChange: function (selectedAnimation) {
                props.setAttributes({ aosAnimation: selectedAnimation });
              },
            }),
            el(RangeControl, {
              label: "Animation Duration (ms)",
              value: props.attributes.aosDuration,
              onChange: function (newDuration) {
                props.setAttributes({ aosDuration: newDuration });
              },
              min: 100,
              max: 3000,
              step: 50,
              allowReset: true,
              resetFallbackValue: 400,
            })
          )
        )
      );
    };
  },
  "withAOSControl");

  addFilter(
    "blocks.registerBlockType",
    "aols-blocks/add-aos-attribute",
    addAOSAttribute
  );

  addFilter("editor.BlockEdit", "aols-blocks/with-aos-control", withAOSControl);

  // Apply AOS data attributes (animation and duration) to block save output
  function applyAOSExtraProps(extraProps, blockType, attributes) {
    if (attributes.aosAnimation) {
      extraProps["data-aos"] = attributes.aosAnimation;
    }
    if (attributes.aosDuration) {
      extraProps["data-aos-duration"] = attributes.aosDuration.toString();
    }
    return extraProps;
  }

  wp.hooks.addFilter(
    "blocks.getSaveContent.extraProps",
    "aols-blocks/apply-aos-extra-props",
    applyAOSExtraProps
  );
})(window.wp);
