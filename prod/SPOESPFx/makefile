BIN_DIR=$(BUILDTYPE)_win_x64
BUILDOUTPUTDIR=$(NLBUILDROOT)/bin/$(BIN_DIR)
SCRIPT_PACKAGE_DIR=$(NLBUILDROOT)/prod/SPOLE/SPOLEWeb/Scripts/

.PHONY: compile
compile:
# npm rebuild node-sass
	npm install
	npm run build
	gulp bundle --ship
	gulp package-solution --ship
	mkdir -p $(BUILDOUTPUTDIR);
	cp -rf --preserve=timestamps './sharepoint/solution/SPOLE(SPFx).sppkg' $(BUILDOUTPUTDIR)

	mkdir -p $(SCRIPT_PACKAGE_DIR);
	cp -rf --preserve=timestamps ./dist/*.js $(SCRIPT_PACKAGE_DIR)
