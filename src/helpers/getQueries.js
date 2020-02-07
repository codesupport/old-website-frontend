import {parse} from "query-string";

export default (search) => parse(search, {
    ignoreQueryPrefix: true
});