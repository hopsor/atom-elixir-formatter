"use babel";

export default {
  formatOnSave: {
    title: "Format on Save",
    description: "Automatically format files on save.",
    type: "boolean",
    default: true,
    order: 1
  },
  showErrorNotifications: {
    title: "Show Error Notifications",
    description: "Show error notifications when formatting fails.",
    type: "boolean",
    default: true,
    order: 2
  },
  elixirExecutable: {
    title: "Elixir Executable",
    description:
      "Use a specific `elixir` executable by providing its absolute path.",
    type: "string",
    default: "elixir",
    order: 3
  }
};
