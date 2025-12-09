import { library, config, IconDefinition } from '@fortawesome/fontawesome-svg-core';

import * as fasChevronUp from '@fortawesome/pro-solid-svg-icons/faChevronUp';
import * as fasChevronDown from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import * as fasChevronRight from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import * as fasChevronLeft from '@fortawesome/pro-solid-svg-icons/faChevronLeft';
import * as fasBuilding from '@fortawesome/pro-solid-svg-icons/faBuilding';
import * as fasFilter from '@fortawesome/pro-solid-svg-icons/faFilter';
import * as fasDownload from '@fortawesome/pro-solid-svg-icons/faDownload';
import * as fasAngleDown from '@fortawesome/pro-solid-svg-icons/faAngleDown';
import * as fasAngleRight from '@fortawesome/pro-solid-svg-icons/faAngleRight';
import * as fasAngleUp from '@fortawesome/pro-solid-svg-icons/faAngleUp';
import * as fasCaretUp from '@fortawesome/pro-solid-svg-icons/faCaretUp';
import * as fasCaretDown from '@fortawesome/pro-solid-svg-icons/faCaretDown';
import * as fasCaretLeft from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import * as fasCaretRight from '@fortawesome/pro-solid-svg-icons/faCaretRight';
import * as fasRefresh from '@fortawesome/pro-solid-svg-icons/faRefresh';
import * as fasFill from '@fortawesome/pro-solid-svg-icons/faFill';
import * as fasGear from '@fortawesome/pro-solid-svg-icons/faGear';
import * as fasSquareCheck from '@fortawesome/pro-solid-svg-icons/faSquareCheck';
import * as fasSquareMinus from '@fortawesome/pro-solid-svg-icons/faSquareMinus';
import * as fasSquareXmark from '@fortawesome/pro-solid-svg-icons/faSquareXmark';
import * as fasSquare from '@fortawesome/pro-solid-svg-icons/faSquare';
import * as fasCopy from '@fortawesome/pro-solid-svg-icons/faCopy';
import * as fasCircleQuestion from '@fortawesome/pro-solid-svg-icons/faCircleQuestion';
import * as fasPuzzlePiece from '@fortawesome/pro-solid-svg-icons/faPuzzlePiece';
import * as fasHouse from '@fortawesome/pro-solid-svg-icons/faHouse';
import * as fasBook from '@fortawesome/pro-solid-svg-icons/faBook';
import * as fasSave from '@fortawesome/pro-solid-svg-icons/faSave';
import * as fasBold from '@fortawesome/pro-solid-svg-icons/faBold';
import * as fasItalic from '@fortawesome/pro-solid-svg-icons/faItalic';
import * as fasUnderline from '@fortawesome/pro-solid-svg-icons/faUnderline';
import * as fasStrikethrough from '@fortawesome/pro-solid-svg-icons/faStrikethrough';
import * as fasAlignCenter from '@fortawesome/pro-solid-svg-icons/faAlignCenter';
import * as fasAlignLeft from '@fortawesome/pro-solid-svg-icons/faAlignLeft';
import * as fasAlignRight from '@fortawesome/pro-solid-svg-icons/faAlignRight';
import * as fasObjectGroup from '@fortawesome/pro-solid-svg-icons/faObjectGroup';
import * as fasTextWidth from '@fortawesome/pro-solid-svg-icons/faTextWidth';
import * as fasLayerGroup from '@fortawesome/pro-solid-svg-icons/faLayerGroup';
import * as fasTableRows from '@fortawesome/pro-solid-svg-icons/faTableRows';
import * as fasTableColumns from '@fortawesome/pro-solid-svg-icons/faTableColumns';
import * as fasFolder from '@fortawesome/pro-solid-svg-icons/faFolder';
import * as fasFolderOpen from '@fortawesome/pro-solid-svg-icons/faFolderOpen';
import * as fasCircle from '@fortawesome/pro-solid-svg-icons/faCircle';
import * as fasCircleCheck from '@fortawesome/pro-solid-svg-icons/faCircleCheck';
import * as fasCircleRadiation from '@fortawesome/pro-solid-svg-icons/faCircleRadiation';
import * as fasCircleInfo from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import * as fasCircleExclamation from '@fortawesome/pro-solid-svg-icons/faCircleExclamation';
import * as fasPen from '@fortawesome/pro-solid-svg-icons/faPen';
import * as fasTrash from '@fortawesome/pro-solid-svg-icons/faTrash';
import * as fasRotateLeft from '@fortawesome/pro-solid-svg-icons/faRotateLeft';
import * as fasRotateRight from '@fortawesome/pro-solid-svg-icons/faRotateRight';
import * as fasArrowUp from '@fortawesome/pro-solid-svg-icons/faArrowUp';
import * as fasArrowDown from '@fortawesome/pro-solid-svg-icons/faArrowDown';
import * as fasArrowLeft from '@fortawesome/pro-solid-svg-icons/faArrowLeft';
import * as fasArrowRight from '@fortawesome/pro-solid-svg-icons/faArrowRight';
import * as fasUp from '@fortawesome/pro-solid-svg-icons/faUp';
import * as fasDown from '@fortawesome/pro-solid-svg-icons/faDown';
import * as fasLeft from '@fortawesome/pro-solid-svg-icons/faLeft';
import * as fasRight from '@fortawesome/pro-solid-svg-icons/faRight';
import * as fasArrowsToDot from '@fortawesome/pro-solid-svg-icons/faArrowsToDot';
import * as fasText from '@fortawesome/pro-solid-svg-icons/faText';
import * as fasArrowTurnDown from '@fortawesome/pro-solid-svg-icons/faArrowTurnDown';
import * as fasHeading from '@fortawesome/pro-solid-svg-icons/faHeading';
import * as fasPaintbrushPencil from '@fortawesome/pro-solid-svg-icons/faPaintbrushPencil';
import * as fasChartSimple from '@fortawesome/pro-solid-svg-icons/faChartSimple';
import * as fasTableCells from '@fortawesome/pro-solid-svg-icons/faTableCells';
import * as fasEye from '@fortawesome/pro-solid-svg-icons/faEye';
import * as fasEyeSlash from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import * as fasChartColumn from '@fortawesome/pro-solid-svg-icons/faChartColumn';
import * as fasChartBar from '@fortawesome/pro-solid-svg-icons/faChartBar';
import * as fasChartLine from '@fortawesome/pro-solid-svg-icons/faChartLine';
import * as fasChartPie from '@fortawesome/pro-solid-svg-icons/faChartPie';
import * as fasPlus from '@fortawesome/pro-solid-svg-icons/faPlus';
import * as fasMinus from '@fortawesome/pro-solid-svg-icons/faMinus';
import * as fasComment from '@fortawesome/pro-solid-svg-icons/faComment';
import * as fasXmark from '@fortawesome/pro-solid-svg-icons/faXmark';
import * as fasSpinner from '@fortawesome/pro-solid-svg-icons/faSpinner';
import * as fasObjectUnion from '@fortawesome/pro-solid-svg-icons/faObjectUnion';
import * as fasInputText from '@fortawesome/pro-solid-svg-icons/faInputText';
import * as fasListTree from '@fortawesome/pro-solid-svg-icons/faListTree';
import * as fasBars from '@fortawesome/pro-solid-svg-icons/faBars';
import * as fasFlagPennant from '@fortawesome/pro-solid-svg-icons/faFlagPennant';
import * as fasSquareO from '@fortawesome/pro-solid-svg-icons/faSquareO';
import * as fasTriangle from '@fortawesome/pro-solid-svg-icons/faTriangle';
import * as fasCircleXmark from '@fortawesome/pro-solid-svg-icons/faCircleXmark';
import * as fasExclamation from '@fortawesome/pro-solid-svg-icons/faExclamation';
import * as fasCheck from '@fortawesome/pro-solid-svg-icons/faCheck';
import * as fasStar from '@fortawesome/pro-solid-svg-icons/faStar';
import * as fasStarHalfStroke from '@fortawesome/pro-solid-svg-icons/faStarHalfStroke';
import * as fasDash from '@fortawesome/pro-solid-svg-icons/faDash';
import * as fasUpRight from '@fortawesome/pro-solid-svg-icons/faUpRight';
import * as fasDownRight from '@fortawesome/pro-solid-svg-icons/faDownRight';
import * as fasSignalBars from '@fortawesome/pro-solid-svg-icons/faSignalBars';
import * as fasSignalBarsWeak from '@fortawesome/pro-solid-svg-icons/faSignalBarsWeak';
import * as fasSignalBarsFair from '@fortawesome/pro-solid-svg-icons/faSignalBarsFair';
import * as fasSignalBarsGood from '@fortawesome/pro-solid-svg-icons/faSignalBarsGood';
import * as fasCircleHalfStroke from '@fortawesome/pro-solid-svg-icons/faCircleHalfStroke';
import * as fasCircleQuarterStroke from '@fortawesome/pro-solid-svg-icons/faCircleQuarterStroke';
import * as fasCircleThreeQuartersStroke from '@fortawesome/pro-solid-svg-icons/faCircleThreeQuartersStroke';
import * as fasTree from '@fortawesome/pro-solid-svg-icons/faTree';
import * as fasMagnifyingGlass from '@fortawesome/pro-solid-svg-icons/faMagnifyingGlass';
import * as fasGripVertical from '@fortawesome/pro-solid-svg-icons/faGripVertical';
import * as fasGripLines from '@fortawesome/pro-solid-svg-icons/faGripLines';
import * as fasGripLinesVertical from '@fortawesome/pro-solid-svg-icons/faGripLinesVertical';
import * as fasSquare1 from '@fortawesome/pro-solid-svg-icons/faSquare1';
import * as fasSquare2 from '@fortawesome/pro-solid-svg-icons/faSquare2';
import * as fasSquare3 from '@fortawesome/pro-solid-svg-icons/faSquare3';
import * as fasSquare4 from '@fortawesome/pro-solid-svg-icons/faSquare4';
import * as fasSquare5 from '@fortawesome/pro-solid-svg-icons/faSquare5';
import * as fasSquare6 from '@fortawesome/pro-solid-svg-icons/faSquare6';
import * as fasQuoteRight from '@fortawesome/pro-solid-svg-icons/faQuoteRight';
import * as fasHorizontalRule from '@fortawesome/pro-solid-svg-icons/faHorizontalRule';
import * as fasList from '@fortawesome/pro-solid-svg-icons/faList';
import * as fasListOl from '@fortawesome/pro-solid-svg-icons/faListOl';
import * as fasListCheck from '@fortawesome/pro-solid-svg-icons/faListCheck';
import * as fasImage from '@fortawesome/pro-solid-svg-icons/faImage';
import * as fasCode from '@fortawesome/pro-solid-svg-icons/faCode';
import * as fasTable from '@fortawesome/pro-solid-svg-icons/faTable';
import * as fasUpload from '@fortawesome/pro-solid-svg-icons/faUpload';
import * as fasLink from '@fortawesome/pro-solid-svg-icons/faLink';
import * as fasEllipsis from '@fortawesome/pro-solid-svg-icons/faEllipsis';
import * as fasEllipsisVertical from '@fortawesome/pro-solid-svg-icons/faEllipsisVertical';
import * as fasCirclePlay from '@fortawesome/pro-solid-svg-icons/faCirclePlay';
import * as fasFont from '@fortawesome/pro-solid-svg-icons/faFont';
import * as fasPalette from '@fortawesome/pro-solid-svg-icons/faPalette';
import * as fasCircle0 from '@fortawesome/pro-solid-svg-icons/faCircle0';
import * as fasCircle1 from '@fortawesome/pro-solid-svg-icons/faCircle1';
import * as fasCircle2 from '@fortawesome/pro-solid-svg-icons/faCircle2';
import * as fasCircle3 from '@fortawesome/pro-solid-svg-icons/faCircle3';
import * as fasCircle4 from '@fortawesome/pro-solid-svg-icons/faCircle4';
import * as fasCircle5 from '@fortawesome/pro-solid-svg-icons/faCircle5';
import * as fasCircle6 from '@fortawesome/pro-solid-svg-icons/faCircle6';
import * as fasCircle7 from '@fortawesome/pro-solid-svg-icons/faCircle7';
import * as fasCircle8 from '@fortawesome/pro-solid-svg-icons/faCircle8';
import * as fasCircle9 from '@fortawesome/pro-solid-svg-icons/faCircle9';
import * as fasWindowMaximize from '@fortawesome/pro-solid-svg-icons/faWindowMaximize';
import * as fasWindowRestore from '@fortawesome/pro-solid-svg-icons/faWindowRestore';

import * as falChevronUp from '@fortawesome/pro-light-svg-icons/faChevronUp';
import * as falChevronDown from '@fortawesome/pro-light-svg-icons/faChevronDown';
import * as falChevronRight from '@fortawesome/pro-light-svg-icons/faChevronRight';
import * as falChevronLeft from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import * as falBuilding from '@fortawesome/pro-light-svg-icons/faBuilding';
import * as falFilter from '@fortawesome/pro-light-svg-icons/faFilter';
import * as falDownload from '@fortawesome/pro-light-svg-icons/faDownload';
import * as falAngleDown from '@fortawesome/pro-light-svg-icons/faAngleDown';
import * as falAngleRight from '@fortawesome/pro-light-svg-icons/faAngleRight';
import * as falAngleUp from '@fortawesome/pro-light-svg-icons/faAngleUp';
import * as falCaretUp from '@fortawesome/pro-light-svg-icons/faCaretUp';
import * as falCaretDown from '@fortawesome/pro-light-svg-icons/faCaretDown';
import * as falCaretLeft from '@fortawesome/pro-light-svg-icons/faCaretLeft';
import * as falCaretRight from '@fortawesome/pro-light-svg-icons/faCaretRight';
import * as falRefresh from '@fortawesome/pro-light-svg-icons/faRefresh';
import * as falFill from '@fortawesome/pro-light-svg-icons/faFill';
import * as falGear from '@fortawesome/pro-light-svg-icons/faGear';
import * as falSquareCheck from '@fortawesome/pro-light-svg-icons/faSquareCheck';
import * as falSquareMinus from '@fortawesome/pro-light-svg-icons/faSquareMinus';
import * as falSquareXmark from '@fortawesome/pro-light-svg-icons/faSquareXmark';
import * as falSquare from '@fortawesome/pro-light-svg-icons/faSquare';
import * as falCopy from '@fortawesome/pro-light-svg-icons/faCopy';
import * as falCircleQuestion from '@fortawesome/pro-light-svg-icons/faCircleQuestion';
import * as falCircleCheck from '@fortawesome/pro-light-svg-icons/faCircleCheck';
import * as falCircleRadiation from '@fortawesome/pro-light-svg-icons/faCircleRadiation';
import * as falCircleInfo from '@fortawesome/pro-light-svg-icons/faCircleInfo';
import * as falCircleExclamation from '@fortawesome/pro-light-svg-icons/faCircleExclamation';
import * as falPuzzlePiece from '@fortawesome/pro-light-svg-icons/faPuzzlePiece';
import * as falHouse from '@fortawesome/pro-light-svg-icons/faHouse';
import * as falBook from '@fortawesome/pro-light-svg-icons/faBook';
import * as falSave from '@fortawesome/pro-light-svg-icons/faSave';
import * as falBold from '@fortawesome/pro-light-svg-icons/faBold';
import * as falItalic from '@fortawesome/pro-light-svg-icons/faItalic';
import * as falUnderline from '@fortawesome/pro-light-svg-icons/faUnderline';
import * as falStrikethrough from '@fortawesome/pro-light-svg-icons/faStrikethrough';
import * as falAlignCenter from '@fortawesome/pro-light-svg-icons/faAlignCenter';
import * as falAlignLeft from '@fortawesome/pro-light-svg-icons/faAlignLeft';
import * as falAlignRight from '@fortawesome/pro-light-svg-icons/faAlignRight';
import * as falUp from '@fortawesome/pro-light-svg-icons/faUp';
import * as falDown from '@fortawesome/pro-light-svg-icons/faDown';
import * as falLeft from '@fortawesome/pro-light-svg-icons/faLeft';
import * as falRight from '@fortawesome/pro-light-svg-icons/faRight';
import * as falObjectGroup from '@fortawesome/pro-light-svg-icons/faObjectGroup';
import * as falTextWidth from '@fortawesome/pro-light-svg-icons/faTextWidth';
import * as falLayerGroup from '@fortawesome/pro-light-svg-icons/faLayerGroup';
import * as falTableRows from '@fortawesome/pro-light-svg-icons/faTableRows';
import * as falTableColumns from '@fortawesome/pro-light-svg-icons/faTableColumns';
import * as falFolder from '@fortawesome/pro-light-svg-icons/faFolder';
import * as falFolderOpen from '@fortawesome/pro-light-svg-icons/faFolderOpen';
import * as falCircle from '@fortawesome/pro-light-svg-icons/faCircle';
import * as falPen from '@fortawesome/pro-light-svg-icons/faPen';
import * as falTrash from '@fortawesome/pro-light-svg-icons/faTrash';
import * as falRotateLeft from '@fortawesome/pro-light-svg-icons/faRotateLeft';
import * as falRotateRight from '@fortawesome/pro-light-svg-icons/faRotateRight';
import * as falArrowUp from '@fortawesome/pro-light-svg-icons/faArrowUp';
import * as falArrowDown from '@fortawesome/pro-light-svg-icons/faArrowDown';
import * as falArrowLeft from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import * as falArrowRight from '@fortawesome/pro-light-svg-icons/faArrowRight';
import * as falArrowsToDot from '@fortawesome/pro-light-svg-icons/faArrowsToDot';
import * as falText from '@fortawesome/pro-light-svg-icons/faText';
import * as falArrowTurnDown from '@fortawesome/pro-light-svg-icons/faArrowTurnDown';
import * as falHeading from '@fortawesome/pro-light-svg-icons/faHeading';
import * as falPaintbrushPencil from '@fortawesome/pro-light-svg-icons/faPaintbrushPencil';
import * as falChartSimple from '@fortawesome/pro-light-svg-icons/faChartSimple';
import * as falTableCells from '@fortawesome/pro-light-svg-icons/faTableCells';
import * as falEye from '@fortawesome/pro-light-svg-icons/faEye';
import * as falEyeSlash from '@fortawesome/pro-light-svg-icons/faEyeSlash';
import * as falChartColumn from '@fortawesome/pro-light-svg-icons/faChartColumn';
import * as falChartBar from '@fortawesome/pro-light-svg-icons/faChartBar';
import * as falChartLine from '@fortawesome/pro-light-svg-icons/faChartLine';
import * as falChartPie from '@fortawesome/pro-light-svg-icons/faChartPie';
import * as falPlus from '@fortawesome/pro-light-svg-icons/faPlus';
import * as falMinus from '@fortawesome/pro-light-svg-icons/faMinus';
import * as falComment from '@fortawesome/pro-light-svg-icons/faComment';
import * as falXmark from '@fortawesome/pro-light-svg-icons/faXmark';
import * as falSpinner from '@fortawesome/pro-light-svg-icons/faSpinner';
import * as falObjectUnion from '@fortawesome/pro-light-svg-icons/faObjectUnion';
import * as falInputText from '@fortawesome/pro-light-svg-icons/faInputText';
import * as falListTree from '@fortawesome/pro-light-svg-icons/faListTree';
import * as falBars from '@fortawesome/pro-light-svg-icons/faBars';
import * as falFlagPennant from '@fortawesome/pro-light-svg-icons/faFlagPennant';
import * as falSquareO from '@fortawesome/pro-light-svg-icons/faSquareO';
import * as falTriangle from '@fortawesome/pro-light-svg-icons/faTriangle';
import * as falCircleXmark from '@fortawesome/pro-light-svg-icons/faCircleXmark';
import * as falExclamation from '@fortawesome/pro-light-svg-icons/faExclamation';
import * as falCheck from '@fortawesome/pro-light-svg-icons/faCheck';
import * as falStar from '@fortawesome/pro-light-svg-icons/faStar';
import * as falStarHalfStroke from '@fortawesome/pro-light-svg-icons/faStarHalfStroke';
import * as falDash from '@fortawesome/pro-light-svg-icons/faDash';
import * as falUpRight from '@fortawesome/pro-light-svg-icons/faUpRight';
import * as falDownRight from '@fortawesome/pro-light-svg-icons/faDownRight';
import * as falSignalBars from '@fortawesome/pro-light-svg-icons/faSignalBars';
import * as falSignalBarsWeak from '@fortawesome/pro-light-svg-icons/faSignalBarsWeak';
import * as falSignalBarsFair from '@fortawesome/pro-light-svg-icons/faSignalBarsFair';
import * as falSignalBarsGood from '@fortawesome/pro-light-svg-icons/faSignalBarsGood';
import * as falCircleHalfStroke from '@fortawesome/pro-light-svg-icons/faCircleHalfStroke';
import * as falCircleQuarterStroke from '@fortawesome/pro-light-svg-icons/faCircleQuarterStroke';
import * as falCircleThreeQuartersStroke from '@fortawesome/pro-light-svg-icons/faCircleThreeQuartersStroke';
import * as falTree from '@fortawesome/pro-light-svg-icons/faTree';
import * as falMagnifyingGlass from '@fortawesome/pro-light-svg-icons/faMagnifyingGlass';
import * as falGripVertical from '@fortawesome/pro-light-svg-icons/faGripVertical';
import * as falGripLines from '@fortawesome/pro-light-svg-icons/faGripLines';
import * as falGripLinesVertical from '@fortawesome/pro-light-svg-icons/faGripLinesVertical';
import * as falSquare1 from '@fortawesome/pro-light-svg-icons/faSquare1';
import * as falSquare2 from '@fortawesome/pro-light-svg-icons/faSquare2';
import * as falSquare3 from '@fortawesome/pro-light-svg-icons/faSquare3';
import * as falSquare4 from '@fortawesome/pro-light-svg-icons/faSquare4';
import * as falSquare5 from '@fortawesome/pro-light-svg-icons/faSquare5';
import * as falSquare6 from '@fortawesome/pro-light-svg-icons/faSquare6';
import * as falQuoteRight from '@fortawesome/pro-light-svg-icons/faQuoteRight';
import * as falHorizontalRule from '@fortawesome/pro-light-svg-icons/faHorizontalRule';
import * as falList from '@fortawesome/pro-light-svg-icons/faList';
import * as falListOl from '@fortawesome/pro-light-svg-icons/faListOl';
import * as falListCheck from '@fortawesome/pro-light-svg-icons/faListCheck';
import * as falImage from '@fortawesome/pro-light-svg-icons/faImage';
import * as falCode from '@fortawesome/pro-light-svg-icons/faCode';
import * as falTable from '@fortawesome/pro-light-svg-icons/faTable';
import * as falUpload from '@fortawesome/pro-light-svg-icons/faUpload';
import * as falLink from '@fortawesome/pro-light-svg-icons/faLink';
import * as falEllipsis from '@fortawesome/pro-light-svg-icons/faEllipsis';
import * as falEllipsisVertical from '@fortawesome/pro-light-svg-icons/faEllipsisVertical';
import * as falCirclePlay from '@fortawesome/pro-light-svg-icons/faCirclePlay';
import * as falFont from '@fortawesome/pro-light-svg-icons/faFont';
import * as falPalette from '@fortawesome/pro-light-svg-icons/faPalette';
import * as falCircle0 from '@fortawesome/pro-light-svg-icons/faCircle0';
import * as falCircle1 from '@fortawesome/pro-light-svg-icons/faCircle1';
import * as falCircle2 from '@fortawesome/pro-light-svg-icons/faCircle2';
import * as falCircle3 from '@fortawesome/pro-light-svg-icons/faCircle3';
import * as falCircle4 from '@fortawesome/pro-light-svg-icons/faCircle4';
import * as falCircle5 from '@fortawesome/pro-light-svg-icons/faCircle5';
import * as falCircle6 from '@fortawesome/pro-light-svg-icons/faCircle6';
import * as falCircle7 from '@fortawesome/pro-light-svg-icons/faCircle7';
import * as falCircle8 from '@fortawesome/pro-light-svg-icons/faCircle8';
import * as falCircle9 from '@fortawesome/pro-light-svg-icons/faCircle9';
import * as falWindowMaximize from '@fortawesome/pro-light-svg-icons/faWindowMaximize';
import * as falWindowRestore from '@fortawesome/pro-light-svg-icons/faWindowRestore';

const fasIcons: IconDefinition[] = [
	fasChevronUp.definition,
	fasChevronDown.definition,
	fasChevronRight.definition,
	fasChevronLeft.definition,
	fasBuilding.definition,
	fasFilter.definition,
	fasDownload.definition,
	fasAngleDown.definition,
	fasAngleUp.definition,
	fasCaretDown.definition,
	fasCaretUp.definition,
	fasCaretLeft.definition,
	fasCaretRight.definition,
	fasRefresh.definition,
	fasFill.definition,
	fasGear.definition,
	fasSquareCheck.definition,
	fasSquareMinus.definition,
	fasSquareXmark.definition,
	fasSquare.definition,
	fasCopy.definition,
	fasCircleQuestion.definition,
	fasPuzzlePiece.definition,
	fasHouse.definition,
	fasBook.definition,
	fasSave.definition,
	fasBold.definition,
	fasItalic.definition,
	fasUnderline.definition,
	fasAlignCenter.definition,
	fasAlignLeft.definition,
	fasAlignRight.definition,
	fasObjectGroup.definition,
	fasTextWidth.definition,
	fasLayerGroup.definition,
	fasTableRows.definition,
	fasTableColumns.definition,
	fasFolder.definition,
	fasFolderOpen.definition,
	fasCircle.definition,
	fasCircleCheck.definition,
	fasCircleRadiation.definition,
	fasCircleExclamation.definition,
	fasCircleInfo.definition,
	fasPen.definition,
	fasTrash.definition,
	fasRotateLeft.definition,
	fasRotateRight.definition,
	fasArrowUp.definition,
	fasArrowDown.definition,
	fasArrowLeft.definition,
	fasArrowRight.definition,
	fasUp.definition,
	fasDown.definition,
	fasLeft.definition,
	fasRight.definition,
	fasText.definition,
	fasArrowTurnDown.definition,
	fasHeading.definition,
	fasPaintbrushPencil.definition,
	fasChartSimple.definition,
	fasTableCells.definition,
	fasEye.definition,
	fasEyeSlash.definition,
	fasChartColumn.definition,
	fasChartBar.definition,
	fasChartLine.definition,
	fasChartPie.definition,
	fasPlus.definition,
	fasMinus.definition,
	fasComment.definition,
	fasXmark.definition,
	fasSpinner.definition,
	fasObjectUnion.definition,
	fasInputText.definition,
	fasArrowsToDot.definition,
	fasListTree.definition,
	fasBars.definition,
	fasFlagPennant.definition,
	fasSquareO.definition,
	fasTriangle.definition,
	fasCircleXmark.definition,
	fasExclamation.definition,
	fasCheck.definition,
	fasStar.definition,
	fasStarHalfStroke.definition,
	fasDash.definition,
	fasUpRight.definition,
	fasDownRight.definition,
	fasSignalBars.definition,
	fasSignalBarsWeak.definition,
	fasSignalBarsFair.definition,
	fasSignalBarsGood.definition,
	fasCircleHalfStroke.definition,
	fasCircleQuarterStroke.definition,
	fasCircleThreeQuartersStroke.definition,
	fasTree.definition,
	fasMagnifyingGlass.definition,
	fasGripVertical.definition,
	fasGripLines.definition,
	fasGripLinesVertical.definition,
	fasSquare1.definition,
	fasSquare2.definition,
	fasSquare3.definition,
	fasSquare4.definition,
	fasSquare5.definition,
	fasSquare6.definition,
	fasQuoteRight.definition,
	fasHorizontalRule.definition,
	fasList.definition,
	fasListOl.definition,
	fasListCheck.definition,
	fasImage.definition,
	fasCode.definition,
	fasTable.definition,
	fasUpload.definition,
	fasLink.definition,
	fasStrikethrough.definition,
	fasEllipsis.definition,
	fasEllipsisVertical.definition,
	fasCirclePlay.definition,
	fasFont.definition,
	fasPalette.definition,
	fasCircle0.definition,
	fasCircle1.definition,
	fasCircle2.definition,
	fasCircle3.definition,
	fasCircle4.definition,
	fasCircle5.definition,
	fasCircle6.definition,
	fasCircle7.definition,
	fasCircle8.definition,
	fasCircle9.definition,
	fasAngleRight.definition,
	fasWindowMaximize.definition,
	fasWindowRestore.definition
];

const falIcons: IconDefinition[] = [
	falChevronUp.definition,
	falChevronDown.definition,
	falChevronRight.definition,
	falChevronLeft.definition,
	falBuilding.definition,
	falFilter.definition,
	falDownload.definition,
	falAngleDown.definition,
	falAngleUp.definition,
	falCaretDown.definition,
	falCaretUp.definition,
	falCaretRight.definition,
	falCaretLeft.definition,
	falRefresh.definition,
	falFill.definition,
	falGear.definition,
	falSquareCheck.definition,
	falSquareMinus.definition,
	falSquareXmark.definition,
	falSquare.definition,
	falCopy.definition,
	falCircleQuestion.definition,
	falPuzzlePiece.definition,
	falHouse.definition,
	falBook.definition,
	falSave.definition,
	falBold.definition,
	falItalic.definition,
	falUnderline.definition,
	falAlignCenter.definition,
	falAlignLeft.definition,
	falAlignRight.definition,
	falObjectGroup.definition,
	falTextWidth.definition,
	falLayerGroup.definition,
	falTableRows.definition,
	falTableColumns.definition,
	falFolder.definition,
	falFolderOpen.definition,
	falCircle.definition,
	falCircleCheck.definition,
	falCircleRadiation.definition,
	falCircleExclamation.definition,
	falCircleInfo.definition,
	falPen.definition,
	falTrash.definition,
	falRotateLeft.definition,
	falRotateRight.definition,
	falArrowUp.definition,
	falArrowDown.definition,
	falArrowLeft.definition,
	falArrowRight.definition,
	falUp.definition,
	falDown.definition,
	falLeft.definition,
	falRight.definition,
	falText.definition,
	falArrowTurnDown.definition,
	falHeading.definition,
	falPaintbrushPencil.definition,
	falChartSimple.definition,
	falTableCells.definition,
	falEye.definition,
	falEyeSlash.definition,
	falChartColumn.definition,
	falChartBar.definition,
	falChartLine.definition,
	falChartPie.definition,
	falPlus.definition,
	falMinus.definition,
	falComment.definition,
	falXmark.definition,
	falSpinner.definition,
	falObjectUnion.definition,
	falInputText.definition,
	falArrowsToDot.definition,
	falListTree.definition,
	falBars.definition,
	falFlagPennant.definition,
	falSquareO.definition,
	falTriangle.definition,
	falCircleXmark.definition,
	falExclamation.definition,
	falCheck.definition,
	falStar.definition,
	falStarHalfStroke.definition,
	falDash.definition,
	falUpRight.definition,
	falDownRight.definition,
	falSignalBars.definition,
	falSignalBarsWeak.definition,
	falSignalBarsFair.definition,
	falSignalBarsGood.definition,
	falCircleHalfStroke.definition,
	falCircleQuarterStroke.definition,
	falCircleThreeQuartersStroke.definition,
	falTree.definition,
	falMagnifyingGlass.definition,
	falGripVertical.definition,
	falGripLines.definition,
	falGripLinesVertical.definition,
	falSquare1.definition,
	falSquare2.definition,
	falSquare3.definition,
	falSquare4.definition,
	falSquare5.definition,
	falSquare6.definition,
	falQuoteRight.definition,
	falHorizontalRule.definition,
	falList.definition,
	falListOl.definition,
	falListCheck.definition,
	falImage.definition,
	falCode.definition,
	falTable.definition,
	falUpload.definition,
	falLink.definition,
	falStrikethrough.definition,
	falEllipsis.definition,
	falEllipsisVertical.definition,
	falCirclePlay.definition,
	falFont.definition,
	falPalette.definition,
	falCircle0.definition,
	falCircle1.definition,
	falCircle2.definition,
	falCircle3.definition,
	falCircle4.definition,
	falCircle5.definition,
	falCircle6.definition,
	falCircle7.definition,
	falCircle8.definition,
	falCircle9.definition,
	falAngleRight.definition,
	falWindowMaximize.definition,
	falWindowRestore.definition
];

export const registerIcons = () => {
	config.styleDefault = 'fal';
	library.add(fasIcons);
	library.add(falIcons);	
}
