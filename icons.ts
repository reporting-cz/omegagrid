import { library, config, IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faChevronUp as fasChevronUp } from '@fortawesome/pro-solid-svg-icons/faChevronUp';
import { faChevronDown as fasChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faBuilding as fasBuilding } from '@fortawesome/pro-solid-svg-icons/faBuilding';
import { faFilter as fasFilter } from '@fortawesome/pro-solid-svg-icons/faFilter';
import { faDownload as fasDownload } from '@fortawesome/pro-solid-svg-icons/faDownload';
import { faAngleDown as fasAngleDown } from '@fortawesome/pro-solid-svg-icons/faAngleDown';
import { faAngleUp as fasAngleUp } from '@fortawesome/pro-solid-svg-icons/faAngleUp';
import { faCaretDown as fasCaretDown } from '@fortawesome/pro-solid-svg-icons/faCaretDown';
import { faRefresh as fasRefresh } from '@fortawesome/pro-solid-svg-icons/faRefresh';
import { faFill as fasFill } from '@fortawesome/pro-solid-svg-icons/faFill';
import { faGear as fasGear } from '@fortawesome/pro-solid-svg-icons/faGear';
import { faSquareCheck as fasSquareCheck } from '@fortawesome/pro-solid-svg-icons/faSquareCheck';
import { faSquare as fasSquare } from '@fortawesome/pro-solid-svg-icons/faSquare';
import { faCopy as fasCopy } from '@fortawesome/pro-solid-svg-icons/faCopy';
import { faCircleQuestion as fasCircleQuestion } from '@fortawesome/pro-solid-svg-icons/faCircleQuestion';
import { faPuzzlePiece as fasPuzzlePiece } from '@fortawesome/pro-solid-svg-icons/faPuzzlePiece';
import { faHouse as fasHouse } from '@fortawesome/pro-solid-svg-icons/faHouse';
import { faBook as fasBook } from '@fortawesome/pro-solid-svg-icons/faBook';
import { faSave as fasSave } from '@fortawesome/pro-solid-svg-icons/faSave';
import { faBold as fasBold } from '@fortawesome/pro-solid-svg-icons/faBold';
import { faItalic as fasItalic } from '@fortawesome/pro-solid-svg-icons/faItalic';
import { faUnderline as fasUnderline } from '@fortawesome/pro-solid-svg-icons/faUnderline';
import { faAlignCenter as fasAlignCenter } from '@fortawesome/pro-solid-svg-icons/faAlignCenter';
import { faAlignLeft as fasAlignLeft } from '@fortawesome/pro-solid-svg-icons/faAlignLeft';
import { faAlignRight as fasAlignRight } from '@fortawesome/pro-solid-svg-icons/faAlignRight';
import { faObjectGroup as fasObjectGroup } from '@fortawesome/pro-solid-svg-icons/faObjectGroup';
import { faTextWidth as fasTextWidth } from '@fortawesome/pro-solid-svg-icons/faTextWidth';
import { faLayerGroup as fasLayerGroup } from '@fortawesome/pro-solid-svg-icons/faLayerGroup';
import { faTableRows as fasTableRows } from '@fortawesome/pro-solid-svg-icons/faTableRows';
import { faTableColumns as fasTableColumns } from '@fortawesome/pro-solid-svg-icons/faTableColumns';
import { faFolder as fasFolder } from '@fortawesome/pro-solid-svg-icons/faFolder';
import { faFolderOpen as fasFolderOpen } from '@fortawesome/pro-solid-svg-icons/faFolderOpen';
import { faCircle as fasCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import { faPen as fasPen } from '@fortawesome/pro-solid-svg-icons/faPen';
import { faTrash as fasTrash } from '@fortawesome/pro-solid-svg-icons/faTrash';
import { faRotateLeft as fasRotateLeft } from '@fortawesome/pro-solid-svg-icons/faRotateLeft';
import { faRotateRight as fasRotateRight } from '@fortawesome/pro-solid-svg-icons/faRotateRight';
import { faArrowUp as fasArrowUp } from '@fortawesome/pro-solid-svg-icons/faArrowUp';
import { faArrowDown as fasArrowDown } from '@fortawesome/pro-solid-svg-icons/faArrowDown';
import { faArrowLeft as fasArrowLeft } from '@fortawesome/pro-solid-svg-icons/faArrowLeft';
import { faArrowRight as fasArrowRight } from '@fortawesome/pro-solid-svg-icons/faArrowRight';
import { faText as fasText } from '@fortawesome/pro-solid-svg-icons/faText';
import { faArrowTurnDown as fasArrowTurnDown } from '@fortawesome/pro-solid-svg-icons/faArrowTurnDown';
import { faHeading as fasHeading } from '@fortawesome/pro-solid-svg-icons/faHeading';
import { faPaintbrushPencil as fasPaintbrushPencil } from '@fortawesome/pro-solid-svg-icons/faPaintbrushPencil';
import { faChartSimple as fasChartSimple } from '@fortawesome/pro-solid-svg-icons/faChartSimple';
import { faTableCells as fasTableCells } from '@fortawesome/pro-solid-svg-icons/faTableCells';
import { faEye as fasEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash as fasEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import { faChartColumn as fasChartColumn } from '@fortawesome/pro-solid-svg-icons/faChartColumn';
import { faChartBar as fasChartBar } from '@fortawesome/pro-solid-svg-icons/faChartBar';
import { faPlus as fasPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
import { faMinus as fasMinus } from '@fortawesome/pro-solid-svg-icons/faMinus';
import { faComment as fasComment } from '@fortawesome/pro-solid-svg-icons/faComment';
import { faXmark as fasXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';

import { faChevronUp as falChevronUp } from '@fortawesome/pro-light-svg-icons/faChevronUp';
import { faChevronDown as falChevronDown } from '@fortawesome/pro-light-svg-icons/faChevronDown';
import { faBuilding as falBuilding } from '@fortawesome/pro-light-svg-icons/faBuilding';
import { faFilter as falFilter } from '@fortawesome/pro-light-svg-icons/faFilter';
import { faDownload as falDownload } from '@fortawesome/pro-light-svg-icons/faDownload';
import { faAngleDown as falAngleDown } from '@fortawesome/pro-light-svg-icons/faAngleDown';
import { faAngleUp as falAngleUp } from '@fortawesome/pro-light-svg-icons/faAngleUp';
import { faCaretDown as falCaretDown } from '@fortawesome/pro-light-svg-icons/faCaretDown';
import { faRefresh as falRefresh } from '@fortawesome/pro-light-svg-icons/faRefresh';
import { faFill as falFill } from '@fortawesome/pro-light-svg-icons/faFill';
import { faGear as falGear } from '@fortawesome/pro-light-svg-icons/faGear';
import { faSquareCheck as falSquareCheck } from '@fortawesome/pro-light-svg-icons/faSquareCheck';
import { faSquare as falSquare } from '@fortawesome/pro-light-svg-icons/faSquare';
import { faCopy as falCopy } from '@fortawesome/pro-light-svg-icons/faCopy';
import { faCircleQuestion as falCircleQuestion } from '@fortawesome/pro-light-svg-icons/faCircleQuestion';
import { faPuzzlePiece as falPuzzlePiece } from '@fortawesome/pro-light-svg-icons/faPuzzlePiece';
import { faHouse as falHouse } from '@fortawesome/pro-light-svg-icons/faHouse';
import { faBook as falBook } from '@fortawesome/pro-light-svg-icons/faBook';
import { faSave as falSave } from '@fortawesome/pro-light-svg-icons/faSave';
import { faBold as falBold } from '@fortawesome/pro-light-svg-icons/faBold';
import { faItalic as falItalic } from '@fortawesome/pro-light-svg-icons/faItalic';
import { faUnderline as falUnderline } from '@fortawesome/pro-light-svg-icons/faUnderline';
import { faAlignCenter as falAlignCenter } from '@fortawesome/pro-light-svg-icons/faAlignCenter';
import { faAlignLeft as falAlignLeft } from '@fortawesome/pro-light-svg-icons/faAlignLeft';
import { faAlignRight as falAlignRight } from '@fortawesome/pro-light-svg-icons/faAlignRight';
import { faObjectGroup as falObjectGroup } from '@fortawesome/pro-light-svg-icons/faObjectGroup';
import { faTextWidth as falTextWidth } from '@fortawesome/pro-light-svg-icons/faTextWidth';
import { faLayerGroup as falLayerGroup } from '@fortawesome/pro-light-svg-icons/faLayerGroup';
import { faTableRows as falTableRows } from '@fortawesome/pro-light-svg-icons/faTableRows';
import { faTableColumns as falTableColumns } from '@fortawesome/pro-light-svg-icons/faTableColumns';
import { faFolder as falFolder } from '@fortawesome/pro-light-svg-icons/faFolder';
import { faFolderOpen as falFolderOpen } from '@fortawesome/pro-light-svg-icons/faFolderOpen';
import { faCircle as falCircle } from '@fortawesome/pro-light-svg-icons/faCircle';
import { faPen as falPen } from '@fortawesome/pro-light-svg-icons/faPen';
import { faTrash as falTrash } from '@fortawesome/pro-light-svg-icons/faTrash';
import { faRotateLeft as falRotateLeft } from '@fortawesome/pro-light-svg-icons/faRotateLeft';
import { faRotateRight as falRotateRight } from '@fortawesome/pro-light-svg-icons/faRotateRight';
import { faArrowUp as falArrowUp } from '@fortawesome/pro-light-svg-icons/faArrowUp';
import { faArrowDown as falArrowDown } from '@fortawesome/pro-light-svg-icons/faArrowDown';
import { faArrowLeft as falArrowLeft } from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import { faArrowRight as falArrowRight } from '@fortawesome/pro-light-svg-icons/faArrowRight';
import { faText as falText } from '@fortawesome/pro-light-svg-icons/faText';
import { faArrowTurnDown as falArrowTurnDown } from '@fortawesome/pro-light-svg-icons/faArrowTurnDown';
import { faHeading as falHeading } from '@fortawesome/pro-light-svg-icons/faHeading';
import { faPaintbrushPencil as falPaintbrushPencil } from '@fortawesome/pro-light-svg-icons/faPaintbrushPencil';
import { faChartSimple as falChartSimple } from '@fortawesome/pro-light-svg-icons/faChartSimple';
import { faTableCells as falTableCells } from '@fortawesome/pro-light-svg-icons/faTableCells';
import { faEye as falEye } from '@fortawesome/pro-light-svg-icons/faEye';
import { faEyeSlash as falEyeSlash } from '@fortawesome/pro-light-svg-icons/faEyeSlash';
import { faChartColumn as falChartColumn } from '@fortawesome/pro-light-svg-icons/faChartColumn';
import { faChartBar as falChartBar } from '@fortawesome/pro-light-svg-icons/faChartBar';
import { faPlus as falPlus } from '@fortawesome/pro-light-svg-icons/faPlus';
import { faMinus as falMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { faComment as falComment } from '@fortawesome/pro-light-svg-icons/faComment';
import { faXmark as falXmark } from '@fortawesome/pro-light-svg-icons/faXmark';

const faIcons: IconDefinition[] = [
	fasChevronUp,
	fasChevronDown,
	fasBuilding,
	fasFilter,
	fasDownload,
	fasAngleDown,
	fasAngleUp,
	fasCaretDown,
	fasRefresh,
	fasFill,
	fasGear,
	fasSquareCheck,
	fasSquare,
	fasCopy,
	fasCircleQuestion,
	fasPuzzlePiece,
	fasHouse,
	fasBook,
	fasSave,
	fasBold,
	fasItalic,
	fasUnderline,
	fasAlignCenter,
	fasAlignLeft,
	fasAlignRight,
	fasObjectGroup,
	fasTextWidth,
	fasLayerGroup,
	fasTableRows,
	fasTableColumns,
	fasFolder,
	fasFolderOpen,
	fasCircle,
	fasPen,
	fasTrash,
	fasRotateLeft,
	fasRotateRight,
	fasArrowUp,
	fasArrowDown,
	fasArrowLeft,
	fasArrowRight,
	fasText,
	fasArrowTurnDown,
	fasHeading,
	fasPaintbrushPencil,
	fasChartSimple,
	fasTableCells,
	fasEye,
	fasEyeSlash,
	fasChartColumn,
	fasChartBar,
	fasPlus,
	fasMinus,
	fasComment,
	fasXmark,

	falChevronUp,
	falChevronDown,
	falBuilding,
	falFilter,
	falDownload,
	falAngleDown,
	falAngleUp,
	falCaretDown,
	falRefresh,
	falFill,
	falGear,
	falSquareCheck,
	falSquare,
	falCopy,
	falCircleQuestion,
	falPuzzlePiece,
	falHouse,
	falBook,
	falSave,
	falBold,
	falItalic,
	falUnderline,
	falAlignCenter,
	falAlignLeft,
	falAlignRight,
	falObjectGroup,
	falTextWidth,
	falLayerGroup,
	falTableRows,
	falTableColumns,
	falFolder,
	falFolderOpen,
	falCircle,
	falPen,
	falTrash,
	falRotateLeft,
	falRotateRight,
	falArrowUp,
	falArrowDown,
	falArrowLeft,
	falArrowRight,
	falText,
	falArrowTurnDown,
	falHeading,
	falPaintbrushPencil,
	falChartSimple,
	falTableCells,
	falEye,
	falEyeSlash,
	falChartColumn,
	falChartBar,
	falPlus,
	falMinus,
	falComment,
	falXmark
];

export const registerIcons = () => {
	config.styleDefault = 'fal';
	library.add(...faIcons);
}