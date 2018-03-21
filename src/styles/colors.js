const avvoPrimary = {
  navy: "#00447B",
  electricBlue: "#26DDFC",
  teal: "#00B7AF",
  coral: "#F27760",
  coolGrey: "#CDCFCE",
  bgColor: "#f9f9f9"
};

const avvoSecondary = {
  blue: "#008CC9",
  orange: "#F55D25",
  orangeHover: "#FF8355",
  orangeActive: "#DD3B00",
};

const avvoTertiary = {
  tertiaryGreen: "#52A304",
  tertiaryYellow: "#FC9835",
  tertiaryRed: "#ED4F4B"
};

const avvoGreyScale = {
  white: "#FFFFFF",
  grey10: "#F9F9F9",
  grey20: "#EAEAEA",
  grey40: "#CCCCCC",
  grey50: "#969696",
  grey70: "#666666",
  grey90: "#333333",
  black: "#000000"
};

const avvoTextbox = {
  // These should be consolidated into standard colors
  textboxBorder: '#66AFE9',
  textboxPlaceholderColor: 'rgba(51,51,51,0.4)',
  textboxDisabledColor: 'rgba(0,0,0,0.02)',
};

const avvoSemantic = {
  avvoPro: avvoPrimary.electricBlue,
  semPrimary: avvoSecondary.orange,
  semSuccess: avvoTertiary.tertiaryGreen,
  semSecondary: "#0394b9",
  semInfo: "#03AFDA",
  semWarning: avvoTertiary.tertiaryYellow,
  semDanger: avvoTertiary.tertiaryRed,
  semActive: avvoSecondary.orange
};

const avvoActiveItem = {
  activeItem: avvoGreyScale.white,
  activeBg: avvoSecondary.orange
};
// Avvo feedback states
const avvoFeedbackStates = {
  stateSuccess: "rgba(82, 163, 4, 0.03)",
  stateInfo: "rgba(3, 175, 218, 0.03)",
  stateWarning: "rgba(252, 152, 53, 0.03)",
  stateDanger: "rgba(237, 79, 75, 0.03)"
};

module.exports = Object.assign(
  {},
  avvoPrimary,
  avvoSecondary,
  avvoTertiary,
  avvoGreyScale,
  avvoSemantic,
  avvoActiveItem,
  avvoFeedbackStates,
  avvoTextbox,
);
