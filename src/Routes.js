import CateLog from './pages/index.jsx';
import Animation from "./pages/animate/animation.tsx";
import Todo from "./pages/todo.jsx";
import AsyncCancel from './pages/async-cancel.jsx';
import WaterFall from './pages/water-fall.jsx';
import WaterMark from './pages/water-mark.jsx';
import ConcurrentRequest from './pages/concurrent-request.jsx';
import NotFound from './pages/not-found.jsx';
import TransitionCompo from "./pages/transition-compo/transition-compo.jsx";
import SkuTable from './pages/SkuTable/SkuTable.jsx';
import Draggable from './pages/draggable/draggable.jsx';
import PassRef from './pages/passRef.jsx';

export default [
    {id: 'catelog', path: '/', component: CateLog, exact: true},
    {id: 'animation', path: '/animation', component: Animation},
    {id: 'todo', path: '/todo', component: Todo},
    {id: 'async-cancel', path: '/async-cancel', component: AsyncCancel},
    {id: 'water-fall', path: '/water-fall', component: WaterFall},
    {id: 'water-mark', path: '/water-mark', component: WaterMark},
    {id: 'concurrent-request', path: '/concurrent-request', component: ConcurrentRequest},
    {id: 'transition-compo', path: '/transition-compo', component: TransitionCompo},
    {id: 'sku-table', path: '/sku-table', component: SkuTable},
    {id: 'draggable', path: '/dragable', component: Draggable},
    {id: 'passref', path: '/passref', component: PassRef},
    {id: 'not-found', path: null, component: NotFound}
];