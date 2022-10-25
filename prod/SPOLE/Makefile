# NLSPOLEventHandler
# Notes: To each Visual Studio compilation output. We chain a few lines of scripts
# together. In doing so, Make executes all of them in one process. We want the exit
# status of this process to be the exit status of code compilation. So we add this
# line of code at the end. Note that there is no line continuation character "\" at
# the end of this line because this is the end of a chain of commands to be executed
# in one shell process. However, the line before this should have a "\".
#		exit $$COMPILE_STATUS
#
# On the other hand, if we put MSVC call within a if statement where the whole compilation
# binary signing and copying to distribution directory are all in one line. That means
# the command "exit $$COMPILE_STATUS" cannot be the last commnand to be executed in a
# process. In this case, we need to check exit status before calling "exit $$COMPILE_STATUS".
#		if [ $$COMPILE_STATUS -ne 0 ]; then		\
#			exit $$COMPILE_STATUS ;				\
#		fi ;									\
# $(BUILDOUTPUTDIR) is $(NLBUILDROOT)/bin/$(BIN_DIR)
#
ifeq ($(NLBUILDROOT),)
  $(error NLBUILDROOT undefined.)
endif

#ifeq ($(NLEXTERNALGITDIR),)
#  $(error NLEXTERNALGITDIR undefined.)
#endif

#
# Variables
#

SOLUTIONFILE=SPOLE.sln

TARGETS_SP=prepare_assamble compile

# Release parameter

# any CPU the target we set it as x64
ifneq ($(TARGETENVARCH),x86)
	TARGETENVARCH=x64
endif

ifneq ($(BUILDTYPE), debug)
	BUILDTYPE=release
endif

BIN_DIR=$(BUILDTYPE)_win_$(TARGETENVARCH)
BUILD_LOGFILE=$(BUILDTYPE)_build.log

# Makefile.vs contains target all which depends on $(TARGETS_SP)
include $(NLBUILDROOT)/build/Makefile.vs

$(info --------------------------------------------------------------------------)
$(info [Project])
$(info PROJECT=$(PROJECT))
$(info [Parameters])
$(info BUILDTYPE=$(BUILDTYPE))
$(info NLBUILDROOT=$(NLBUILDROOT))
$(info NLEXTERNALGITDIR=$(NLEXTERNALGITDIR))
$(info BUILDOUTPUTDIR=$(BUILDOUTPUTDIR))
$(info BIN_DIR=$(BIN_DIR))
$(info ---------------------------------------------------------------------------)

DEPEND_DIR=$(NLBUILDROOT)/prod/SPOLE/depend


.PHONY: prepare_assamble
prepare_assamble:
	@echo "Prepare assamble"
	@echo "Copy depend"
	cp -pf $(MSENFORCECOMMON)/bin/$(BUILDTYPE)_win_$(TARGETENVARCH)/QueryCloudAZSDK.dll  $(DEPEND_DIR)/


.PHONY: compile
compile:
	@echo ""
	@echo "Deploying $(PROJECT) ($(BUILDTYPE)) $(VERSION_PROJECT) for NextLabs SharePoint Online Enforcer, output $(BUILDOUTPUTDIR)"
	@echo ""
	@echo "Command: $(MSVSIDE) $(SOLUTIONFILE)  /deploy $(BUILDTYPE)|$(TARGETENVARCH)  /out $(BUILD_LOGFILE)"
	@echo ""
	rm -f $(BIN_DIR)/$(BUILD_LOGFILE)
	rm -f $(BUILD_LOGFILE)
	$(MSVSIDE) $(SOLUTIONFILE)  /deploy "$(BUILDTYPE)|$(TARGETENVARCH)"  /out $(BUILD_LOGFILE) ; \
	COMPILE_STATUS=$$? ; \
	if [ -f $(BUILD_LOGFILE) ] ; then \
		echo "[[DUMP BEGIN - $(BUILD_LOGFILE)]]" ; \
		cat $(BUILD_LOGFILE) ; \
		echo "[[DUMP END - $(BUILD_LOGFILE)]]" ; \
	else \
		echo "WARNING: Cannot find $(BUILD_LOGFILE)" ; \
	fi ; \

	mkdir -p $(BUILDOUTPUTDIR);
	cp -rf --preserve=timestamps ./SPOLE/bin/x64/Release/app.publish/$(VERSION_PROJECT)/SPOLE.app $(BUILDOUTPUTDIR)
	cp -rf --preserve=timestamps ./SPOLE/bin/x64/Release/app.publish/$(VERSION_PROJECT)/SPOLE.Web.deploy.cmd $(BUILDOUTPUTDIR)
	cp -rf --preserve=timestamps ./SPOLE/bin/x64/Release/app.publish/$(VERSION_PROJECT)/SPOLE.Web.SetParameters.xml $(BUILDOUTPUTDIR)
	cp -rf --preserve=timestamps ./SPOLE/bin/x64/Release/app.publish/$(VERSION_PROJECT)/SPOLE.Web.zip $(BUILDOUTPUTDIR)
	cp -rf --preserve=timestamps ./UpdateSharePointApp/bin/x64/Release/UpdateSharePointApp.exe $(BUILDOUTPUTDIR)

	mkdir -p $(NLBUILDROOT)/bin/pdb;
	mkdir -p $(NLBUILDROOT)/bin/pdb/release_win_x64;
	cp -rf --preserve=timestamps ./SPOLEWeb/bin/*.pdb $(NLBUILDROOT)/bin/pdb/release_win_x64/


.PHONY: clean
clean:
	@if [ -e ./Makefile.inc ]; then \
		rm -rf $(BIN_DIR) $(HOSTAPPPROJECT)/obj $(PROVIDERPROJECT)/obj \
			obj* *.suo *.ncb *.pdb $(BIN_DIR)/$(BUILD_LOGFILE) \
			$(BUILDOUTPUTDIR)/NLSPOLEventHandler.pdb \
			$(BUILDOUTPUTDIR)/NLSPOLEventHandlerWeb.dll \
			$(BUILDOUTPUTDIR)/NLSPOLEventHandlerWeb.pdb	\
			$(BUILDOUTPUTDIR)/NLSPOERER/ \
			$(BUILDOUTPUTDIR)/$(HOSTAPPPROJECTNAME).web.zip \
			$(BUILDOUTPUTDIR)/NLSPOLEventHandlerWeb.dll.config ; \
	fi
