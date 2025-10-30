export * as bucket from "@omegagrid/bucket";
export * as code from "@omegagrid/code";
export * as dialog from "@omegagrid/dialog";
export * as commands from "@omegagrid/commands";
export * as calendar from "@omegagrid/calendar";
export * as core from "@omegagrid/core";
export * as editor from "@omegagrid/editor";
export * as form from "@omegagrid/form";
export * as grid from "@omegagrid/grid";
export * as markdown from "@omegagrid/markdown";
export * as statusbar from "@omegagrid/statusbar";
export * as tabs from "@omegagrid/tabs";
export * as toolbar from "@omegagrid/toolbar";
export * as tree from "@omegagrid/tree";
export * as localize from "@omegagrid/localize";
import * as xlsxPlugin from "@omegagrid/plugin-xlsx";
import * as chartPlugin from "@omegagrid/plugin-charts";

export const plugins = {
	xlsx: xlsxPlugin,
	charts: chartPlugin,
};

const pkg = {
	name: process.env.PACKAGE_NAME,
	version: process.env.PACKAGE_VERSION,
};

export { pkg as package };

import { registerIcons } from './icons';
import { getThemeManager } from "@omegagrid/core";

getThemeManager().activate('light');

registerIcons();