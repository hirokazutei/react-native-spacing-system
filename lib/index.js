import { DebugContext } from "./Context";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
function spacingFactory(spacing, disallowLayout) {
    const Inset = insetFactory(spacing, disallowLayout);
    const Stack = stackFactory(spacing);
    const Queue = queueFactory(spacing);
    return { Inset, Stack, Queue };
}
export { DebugContext, Inset, insetFactory, spacingFactory, Stack, stackFactory, Queue, queueFactory, };
//# sourceMappingURL=index.js.map