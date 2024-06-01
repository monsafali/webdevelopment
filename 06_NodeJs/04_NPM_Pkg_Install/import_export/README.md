require v/s import
import {sum} from "./math.js";


we can't selectivly load only the pieces we need wiht require but witht import, we can selectively load only the pieces we need, which can save memory.
 Loading is synchronous for 'require' but can be asynchronous for 'import'.