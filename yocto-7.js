# target
MACHINE ?= "raspberrypi0-wifi"
# download folder
DL_DIR ?= "${HOME}/yocto-downloads"
# shared state folder
SSTATE_DIR ?= "${HOME}/yocto-sstate-cache"
SSTATE_MIRRORS ?= "file://.* http://sstate.yoctoproject.org/all/PATH;downloadfilename=PATH"
# add a feature, append it at end
EXTRA_IMAGE_FEATURES:append = " ssh-server-dropbear"
# add a recipe, append it at end
CORE_IMAGE_EXTRA_INSTALL:append = " nano"
