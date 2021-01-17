## Release Instruction

**To Release Version `X.Y.Z`:**

1. From `develop` checkout a new branch with name `release/vX.Y.Z`.
2. Update version to `X.Y.Z` on `package.json`.
3. Use commit since last release as reference to update `CHANGELOG.md`.
4. Commit changes with name: `RELEASE: vX.Y.Z`.
5. Push the commit.
6. Merge into `develop`.
7. Make a pull-request from `develop` to `master` with title: `RELEASE: vX.Y.Z`.
8. Merge `develop` into `master`.
9. Checkout `master` and pull latest changes.
10. Log into npm by using `npm login`.
11. Run `npm publish --dry-run` and make sure everything is okay.
12. Release the update using `npm publish`.
13. Create a new release on github.
