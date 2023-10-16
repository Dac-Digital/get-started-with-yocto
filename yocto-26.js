SUMMARY = "Install start-wifi.sh file."
FILESEXTRAPATHS:prepend := "${THISDIR}/files:"
SRC_URI:append = "file://start-wifi.sh"

do_install:append() {
	install -m 0755    ${WORKDIR}/start-wifi.sh     ${D}${sysconfdir}/init.d
    update-rc.d -r ${D} start-wifi.sh start 99 2 3 4 5 .
}

MASKED_SCRIPTS += "start-wifi"
