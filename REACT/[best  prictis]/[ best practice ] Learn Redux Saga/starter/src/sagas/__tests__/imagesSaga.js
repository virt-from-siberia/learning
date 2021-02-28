import { getPage, hadleImagesLoad } from "../imagesSaga";

test("selector give back page", () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});

test("should load images and handle them in case of seccess", () => {});
