export * as bucket from "@omegagrid/bucket";
export * as code from "@omegagrid/code";
export * as commands from "@omegagrid/commands";
import * as core from "@omegagrid/core";
export * as editor from "@omegagrid/editor";
export * as form from "@omegagrid/form";
export * as grid from "@omegagrid/grid";
export * as statusbar from "@omegagrid/statusbar";
export * as tabs from "@omegagrid/tabs";
export * as toolbar from "@omegagrid/toolbar";
export * as tree from "@omegagrid/tree";
import * as pluginXLSX from "@omegagrid/plugin-xlsx";

export { core };

export const plugins = {
	xlsx: pluginXLSX
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