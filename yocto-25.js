SUMMARY = "Install wpa_supplicant.conf file."
FILESEXTRAPATHS:prepend := "${THISDIR}/files:"
SRC_URI:append = "file://wpa_supplicant.conf-sane"

do_install:append() {
	install -d ${D}${sysconfdir}
	install -m 600 ${WORKDIR}/wpa_supplicant.conf-sane ${D}${sysconfdir}/wpa_supplicant.conf
}
