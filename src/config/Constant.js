const Constant = {
    API_VERSION: 2,

    // TODO YOHAN: uncomment when backend deployed to dev / prod
    // URL_MASTER_PATH_SECURITY: process.env.REACT_APP_MASTER_PATH_SECURITY_DEV,
    // URL_MASTER_PATH_AGEN: process.env.REACT_APP_MASTER_PATH_AGEN_DEV,
    // URL_MASTER_PATH: process.env.REACT_APP_MASTER_PATH_DEV,
    URL_MASTER_PATH_SECURITY: "https://devapidigital.pegadaiansyariah.co.id/staging-parameter-konten/api/",
    URL_MASTER_PATH_AGEN: "https://devapidigital.pegadaiansyariah.co.id/staging-parameter-konten/api/",
    URL_MASTER_PATH: "https://devapidigital.pegadaiansyariah.co.id/staging-parameter-konten/api/",

    REACT_APP_MASTER_PATH_MINIO: process.env.REACT_APP_MASTER_PATH_MINIO_DEV,

    //URL VERIFY GOOGLE CAPTCHA
    URL_POST_RECAPTCHA: process.env.REACT_APP_POST_RECAPTCHA,

    //Recaptcha
    URL_POST_RECAPTCHA_VERIFY: "auth/login/verifyCaptca",

    //GET
    //Audit Log
    URL_GET_ALL_AUDITLOG: "audit-log/get-all",
    URL_GET_FIELDS_AUDITLOG: "audit-log/get-list-auditlog-fields",
    URL_GET_SEARCHED_AUDITLOG: "audit-log/search",
    URL_GET_DETAIL_AUDITLOG: "audit-log/get-auditlog-modified-value",
    URL_GET_EVENTNAME_AUDITLOG: "audit-log/get-list-logtype",

    URL_GET_USER: "user/list-of-user",
    URL_GET_DASHBOARD: "dashboard",
    URL_CHECK_KTP: "agent-registration/check-ktp",
    URL_GET_LIST_BRANCH: "branch/get-list-branch",
    URL_GET_LIST_JENIS_MEREK_HP: "parameters/get-merk-handpone",
    URL_GET_LIST_JENIS_LAPTOP: "parameters/get-parameter-laptop",
    URL_GET_LIST_JENIS_PERHIASAN: "parameters/get-jenis-perhiasan",
    URL_GET_LIST_KENDARAAN_MOTOR: "parameters/get-kendaraan-motor",
    URL_GET_LIST_KENDARAAN_MOBIL: "parameters/get-kendaraan-mobil",
    URL_GET_LIST_KADAR: "parameters/get-kadar",
    URL_GET_REGION_LIST_PROVINCE: "parameters/region/province",
    URL_GET_REGION_LIST_CITY: "parameters/region/kota",
    URL_GET_REGION_LIST_KECAMATAN: "parameters/region/kecamatan",
    URL_GET_REGION_LIST_KELURAHAN: "parameters/region/kelurahan",

    URL_GET_DETAIL_PROFILE: "profiles/get-detail",
    URL_GET_LIST_STATUS_KAWIN: "parameters/status-kawin",
    URL_GET_LIST_BANK_CODE: "parameters/bank-code",
    URL_GET_PORTOFOLIO: "portofolio/get-portofolio-detail",
    URL_GET_LIST_KEPING_LOGAM_MULIA: "parameters/get-parameter-keping",
    URL_UPLOAD_IMAGE: "image/upload",
    URL_GET_PARAMETER_TENOR: "parameters/get-tenor-booking-rahn",
    URL_GET_LIST_JENIS_ELEKTRONIK: "parameters/get-elektronik",
    URL_GET_LIST_JENIS_BARANG_GUDANG: "parameters/get-jenis-gudang",
    URL_GET_LIST_JENIS_MEREK_ELEKTRONIK: "parameters/get-merk-elektronik",
    URL_GET_PARAMETER_TENOR_ARRUM_BPKB: "parameters/get-tenor-arrum-bpkb",
    URL_GET_LIST_BANK: "parameters/get-bank",
    URL_GET_REKENING_EMAS_SELF: "rekening-favorite/get-list-tabungan-pribadi",
    URL_GET_REKENING_EMAS_TUJUAN: "rekening-favorite/get-list-tabungan-tujuan",
    URL_GET_CETAKAN_TYPE: "parameters/cetak-emas",
    URL_LIST_CETAKAN_BY_TYPE: "parameters/parameter-cetak-emas",
    URL_LIST_DASHBOARD_IMAGE: "dashboard/list-image",
    URL_DELETE_DASHBOARD_IMAGE: "dashboard/delete",
    URL_ADD_CONTENT: "dashboard/upload",

    URL_GET_BANKS: "parameters/banks",

    URL_GET_PARAMETER_BIDANG_USAHA: "parameters/bidang-usaha",
    URL_GET_PARAMETER_STATUS_TEMPAT_USAHA: "parameters/status-tempat-usaha",
    URL_GET_PARAMETER_JENIS_TEMPAT_USAHA: "parameters/jenis-tempat-usaha",

    URL_GET_PROVINSI: "parameters/region/province",
    URL_GET_KABUPATEN: "parameters/region/kota",
    URL_GET_KELURAHAN: "parameters/region/kelurahan",
    URL_GET_KECAMATAN: "parameters/region/kecamatan",
    URL_GET_LIST_NOMOR_AKAD_TUJUAN: "rahn/get-list-nomor-akad-tujuan",

    URL_GET_DATA_HISTORY_BOOKING_RAHN: "rahn/get-all-history",
    URL_GET_LIST_NOMOR_AKAD_PRIBADI_MIKRO:
        "mikro-pembayaran/get-list-nomor-akad-pribadi",
    URL_GET_LIST_NOMOR_AKAD_PRIBADI_RAHN: "rahn/get-list-nomor-akad-pribadi",
    URL_GET_REKENING_PRIBADI_FAVORITE:
        "rekening-favorite/get-norek-pribadi-favorite",
    URL_GET_STL_HARGA_EMAS: "parameter-stl/harga-emas",

    URL_GET_REKENING_TABUNGAN_EMAS: "tabungan-emas/get-rekening",
    URL_GET_DATA_NASABAH_TABUNGAN_EMAS: "profiles/get-detail",

    URL_GET_LIST_PROMOTIONS: "promotions",
    URL_INQUIRY_PROMOTIONS: "promotions/inquiry",
    URL_CANCEL_INQUIRY_PROMOTIONS: "promotions/cancel-inquiry",

    URL_GET_DATA_HISTORY_BUKA_TABUNGAN_EMAS:
        "tabungan-emas/open-tabungan-emas/detail-history-web",
    URL_GET_ALL_DATA_HISTORY_EMAS: "history-emas/get-all-history",
    URL_GET_DATA_HISTORY_JUAL_EMAS: "tabungan-emas/jual-emas/detail-history-web",
    URL_GET_LIST_HISTORY_PEMBAYARAN: "history-pembayar/get-all-history",
    URL_GET_DETAIL_PEMBAYARAN_RAHN: "pembayaran/rahn/get-detail-web",
    URL_GET_DETAIL_PEMBAYARAN_MIKRO: "mikro-pembayaran/get-detail-web",
    URL_GET_DATA_HISTORY_TOP_UP_EMAS: "tabungan-emas/top-up/detail-web",
    URL_GET_DATA_HISTORY_TRANSFER_EMAS: "tabungan-emas/trasfer/detail-web",
    URL_GET_DATA_HISTORY_CETAK_EMAS: "tabungan-emas/cetak/detail-web",

    URL_GET_ALL_DETAIL_RAHN: "rahn/get-detail-web",
    URL_GET_PERSONAL_BANK: "profiles/get-personal-bank",
    URL_GET_LIST_NOMOR_AKAD_TUJUAN_MIKRO:
        "mikro-pembayaran/get-list-nomor-akad-tujuan",
    URL_GET_LIST_INFO_HARGA_LOGAM_MULIA: "harga-mulia",

    URL_GET_LIST_HISTORY_PEMBIAYAAN: "history-pembiayaan/get-all-history",
    URL_GET_DETAIL_DATA_ARRUM_BPKB: "arrum-bpkb/get-detail-history-web",
    URL_GET_DETAIL_DATA_ARRUM_HAJI: "arrum-haji/detail-transaksi-web",
    URL_GET_DETAIL_DATA_AMANAH: "amanah/detail-web",
    URL_GET_PROVIDER_PULSA: "provider/pulsa/validasi-nomor",
    URL_GET_LIST_PULSA: "parameters/mpo/seluler/get-pulsa",
    URL_GET_LIST_INTERNET: "parameters/mpo/seluler/get-internet",
    URL_GET_LIST_OPERATOR: "parameters/mpo/pascabayar/get-handphone",
    URL_GET_LIST_BPJS: "parameters/mpo/bpjs/kesehatan",
    URL_GET_LIST_TOKEN_LISTRIK: "parameters/mpo/listrik/get-token",
    URL_GET_DETAIL_DATA_ARRUM_EMAS: "arrum-emas/detail",
    URL_GET_DETAIL_DATA_TASJILY_TANAH: "tasjily-tanah/detail/",

    URL_GET_DATA_TELKOM_INTERNET: "parameters/mpo/telkom/get-internet",
    URL_GET_DATA_TELKOM: "parameters/mpo/telkom/get-telepon",
    URL_GET_DATA_NOMOR_TELKOM: "telkom/telepon/validasi-nomor",

    URL_GET_PARAMETER_TASJILY: "parameters",
    URL_GET_TENOR_TASJILY: "tasjily-tanah/tenor",

    URL_GET_LIST_HISTORY_MULTI_PAYMENT: "mpo/get-all",
    URL_GET_DETAIL_HISTORY_MULTI_PAYMENT: "mpo/web",
    URL_GET_LIST_PARAMETERS_MPO: "parameters/mpo/get-all",
    URL_GET_CETAKAN_BELI_MULA: "parameters/mulia/vendor",
    URL_GET_DETAIL_LOGAM_MULIA: "mulia/detail-web",
    URL_GET_DETAIL_PARAMETERS_MPO: "parameters/mpo/get-detail",
    URL_GET_PROVIDER: "provider/pulsa/get-provider",
    URL_GET_PRODUK_PROVIDER: "provider/pulsa/get-produk-provider",
    URL_GET_DETAIL_NOTIFIKASI: "info",
    URL_GET_DETAIL_TASJILY_TANAH: "tasjily-tanah/detail-web",
    URL_GET_PROVIDER_LIST: "provider/pulsa/get-provider",

    URL_GET_LIST_PARAMETERS_BANK_ADMIN: "admin/banks",
    // URL_SEND_OTP: 'otp/send-otp',
    // URL_VERIFY_OTP: 'otp/verify-otp',

    //secure login
    SECURE_LOGIN: true,
    KEY_SECURITY: "V*#VStVC2a7@#cx#",

    //POST
    URL_LOGIN: "auth/login",
    URL_LOGIN_SECURE: "auth/login/secure",
    URL_LOGIN_ADMIN: "auth/admin/login",
    URL_LOGIN_ADMIN_SECURE: "auth/admin/login/secure",
    URL_LOGOUT: "auth/logout",
    URL_LOGOUT_ADMIN: "auth/admin/logout",
    URL_REGISTER: "registration/",
    URL_VERIFICATION_AGEN: "registration/activation-nasabah",
    URL_CHANGE_PROFILE: "profiles/change-profile",
    URL_CHANGE_NPWP: "profiles/change-npwp",
    URL_CHANGE_BANK_PROFILE: "profiles/change-bank-account",
    URL_CHANGE_PROFILE_PICTURE: "profiles/upload-profile-picture",
    URL_LINK_CIF: "profiles/link-cif",
    URL_SIMULASI_LAPTOP: "rahn/laptop/simulasi",
    URL_SIMULASI_KENDARAAN: "rahn/kendaraan/simulasi",
    URL_SIMULASI_HANDPHONE: "rahn/handphone/simulasi",
    URL_SIMULASI_PERHIASAN: "rahn/perhiasan/simulasi",
    URL_SIMULASI_LOGAM_MULIA: "rahn/logam-mulia/simulasi",
    URL_SUBMIT_BOOKING_RAHN_LAPTOP: "rahn/laptop/submit",
    URL_SUBMIT_BOOKING_RAHN_HANDPHONE: "rahn/handphone/submit",
    URL_CHECK_PIN: "profiles/check-pin",
    URL_SUBMIT_BOOKING_RAHN_ELEKTRONIK: "rahn/elektronik/submit",
    URL_SIMULASI_ELEKTRONIK: "rahn/elektronik/simulasi",
    URL_SIMULASI_BARANG_GUDANG: "rahn/barang-gudang/simulasi",
    URL_SUBMIT_BOOKING_RAHN_PERHIASAN: "rahn/perhiasan/submit",
    URL_SUBMIT_BOOKING_RAHN_GUDANG: "rahn/barang-gudang/submit",
    URL_SUBMIT_BOOKING_RAHN_LOGAM_MULIA: "rahn/logam-mulia/submit",
    URL_SUBMIT_BOOKING_RAHN_KENDARAAN: "rahn/kendaraan/submit",
    URL_INQUIRY_TOP_UP_EMAS: "tabungan-emas/top-up/inquiry",
    URL_SUBMIT_CREATE_BILLING_TOP_UP_EMAS: "tabungan-emas/top-up/create-billing",
    URL_SUBMIT_CREATE_BILLING_PEMBAYARAN_RAHN: "pembayaran/create-billing",
    URL_SUBMIT_CREATE_BILLING_PEMBAYARAN_MIKRO: "mikro-pembayaran/create-billing",
    URL_INQUIRY_PEMBAYARAN_RAHN: "rahn/pembayaran/inquiry",
    URL_INQUIRY_PEMBAYARAN_MIKRO: "mikro-pembayaran/inquiry",
    URL_INQUIRY_TRANSFER_EMAS: "tabungan-emas/transfer/inquiry",
    URL_PAYMENT_TRANSFER_EMAS: "tabungan-emas/transfer/payment",
    URL_SUBMIT_ARRUM_HAJI: "arrum-haji/submit",
    URL_SUBMIT_INQUIRY_MPO: "mpo/inquiry",
    URL_SUBMIT_PARAMETER_TASJILY_TANAH: "tasjily-tanah/parameter",
    URL_SUBMIT_SIMULASI_TASJILY_TANAH: "tasjily-tanah/simulasi",
    URL_SUBMIT_TASJILY_TANAH: "tasjily-tanah/submit",

    URL_SUBMIT_PARAMETERS_BANK_ADMIN: "admin/banks",

    URL_PROFILE_SET_FIREBASE_TOKEN: "profiles/device-id",

    URL_SIMULASI_TABUNGAN_EMAS: "tabungan-emas/open-tabungan-emas/simulasi",
    URL_INQUIRY_TABUNGAN_EMAS: "tabungan-emas/open-tabungan-emas/inquiry",
    URL_VIRTUAL_ACCOUNT_TABUNGAN_EMAS:
        "tabungan-emas/open-tabungan-emas/generate-virtualaccount",
    URL_INQUIRY_CETAK_EMAS: "tabungan-emas/cetak/inquiry",
    URL_CREATE_BILLING_CETAK_EMAS: "tabungan-emas/cetak/create-billing",
    URL_SUBMIT_SIMULASI_ARRUM_HAJI: "arrum-haji/simulasi",
    URL_SUBMIT_CREATE_BILLING_ARRUM_HAJI: "arrum-haji/submit",
    URL_SET_REKENING_PRIBADI_FAVORITE:
        "rekening-favorite/select-norek-pribadi-favorite",
    URL_TAKSIRAN_JAMINAN_ARRUM_HAJI: "arrum-haji/taksiran-jaminan",
    URL_CREATE_PIN: "profiles/create-pin",
    URL_CHANGE_PIN: "profiles/change-pin",

    URL_SIMULASI_JUAL_EMAS: "tabungan-emas/jual-emas/simulasi-nominal",
    URL_INQUIRY_JUAL_EMAS: "tabungan-emas/jual-emas/inquiry",
    URL_PAYMENT_JUAL_EMAS: "tabungan-emas/jual-emas/payment",

    URL_SIMULASI_AMANAH_UANG_MUKA: "amanah/simulasi/cari-uang-muka",
    URL_SIMULASI_MAX_MARHUN_BIH: "amanah/simulasi/cari-max-marhun-bih",
    URL_SIMULASI_AMANAH_TENOR: "amanah/simulasi/detail",
    URL_SUBMIT_PEMBIAYAAN_AMANAH: "amanah/submit",

    URL_SIMULASI_MARHUN_BIH_ARRUM_BPKB: "arrum-bpkb/simulasi-perkiraan-marhun",
    URL_SIMULASI_ARRUM_BPKB: "arrum-bpkb/simulasi",
    URL_SUBMIT_BE_ARRUM_BPKB: "arrum-bpkb/submit",

    URL_INQUIRY_MULTI_PAYMENT: "mpo/inquiry",
    URL_CREATE_BILLING_MULTI_PAYMENT: "mpo/create-billing",
    URL_GET_LIST_WILAYAH_PDAM: "parameters/mpo/air/get-pdam",

    URL_MULTI_PAYMENT_INQUIRY: "mpo/inquiry",
    URL_MULTI_PAYMENT_SUBMIT: "mpo/create-billing",

    URL_TAKSIRAN_JAMINAN_ARRUM_EMAS: "arrum-emas/taksir",
    URL_SUBMIT_SIMULASI_ARRUM_EMAS: "arrum-emas/simulasi",
    URL_SUBMIT_ARRUM_EMAS: "arrum-emas/submit",
    URL_POST_PARAMETER_ARRUM_EMAS: "arrum-emas/parameter",
    URL_SIMULASI_BELI_LOGAM_MULIA: "mulia/simulasi",
    URL_INQUIRY_BELI_LOGAM_MULIA: "mulia/inquiry",
    URL_SUBMIT_INQUIRY_LOGAM_MULIA: "mulia/create-billing",

    URL_ADD_CSV_NOTIFIKASI: "info/add-csv",
    URL_SUBMIT_TAMBAH_NOTIFIKASI: "info",
    URL_SEND_CSV_NOTIFIKASI: "info/send-csv",

    URL_CHECK_PASSWORD: "profiles/check-forgot-password-step-one",
    URL_VERIFY_OTP: "profiles/check-forgot-password-step-two",
    URL_FORGOT_PASSWORD: "profiles/user/forgot-password-step-submit",
    URL_SEND_OTP: "otp/send-otp",

    URL_CHANGE_PASSWORD: "profiles/user/change-password",
    // URL_CHECK_PASSWORD: 'profiles/check-forgot-password',
    // URL_FORGOT_PASSWORD: 'profiles/user/forgot-password',

    //ADMIN URL

    URL_ADMIN_USERNAME_CONFIRMATION: "admin/check-username-admin",
    URL_ADMIN_FORGOT_PASSWORD: "admin/forgot-password-admin",
    URL_ADMIN_RESET_PASSWORD: "admin/reset-password-admin-expired",

    URL_CHANGE_PASSWORD_ADMIN: "admin/change-password",
    URL_GET_LIST_PENGAJUAN_RAHN: "rahn/get-all-history",
    URL_GET_DETAIL_PENGAJUAN_RAHN: "rahn/get-detail",
    URL_PRINT_PENGAJUAN_RAHN: "rahn/generate-transaction-detail",
    URL_GET_LIST_HISTORY_BUKA_TABUNGAN_EMAS:
        "tabungan-emas/open-tabungan-emas/get-all-history",
    URL_GET_LIST_HISTORY_CETAK_TABUNGAN_EMAS:
        "tabungan-emas/cetak-tabungan-emas/get-all-history",
    URL_GET_DETAIL_HISTORY_TABUNGAN_EMAS:
        "tabungan-emas/open-tabungan-emas/detail-transaksi",
    URL_GET_DETAIL_HISTORY_CETAK_EMAS: "tabungan-emas/cetak/detail",
    URL_GET_LIST_HISTORY_JUAL_TABUNGAN_EMAS:
        "tabungan-emas/open-tabungan-emas/get-all-history",
    URL_GET_LIST_HISTORY_TOP_UP_TABUNGAN_EMAS:
        "tabungan-emas/top-up/get-all-history",
    URL_GET_LIST_TRANSFER_EMAS:
        "tabungan-emas/transfer-tabungan-emas/get-all-history",
    URL_GET_LIST_HISTORY_JUAL_EMAS: "tabungan-emas/jual-emas/get-all-history",
    URL_GET_ALL_BRANCH: "branch/get-all-branch",
    URL_GET_LIST_NASABAH_SYARIAH: "profiles/nasabah/get-all",
    URL_GET_DETAIL_NASABAH_SYARIAH: "profiles/nasabah/detail",
    URL_CHANGE_EMAIL_NASABAH_SYARIAH: "profiles/user/change-email",
    URL_DEACTIVATE_NASABAH_SYARIAH: "profiles/nasabah/non-active",
    URL_UNLINK_CIF_NASABAH_SYARIAH: "profiles/nasabah/unlink-local-cif",
    URL_GET_DETAIL_HISTORY_PEMBAYARAN_RAHN: "pembayaran/rahn/get-detail",
    URL_GET_DETAIL_HISTORY_PEMBAYARAN_MIKRO: "mikro-pembayaran/get-detail",
    URL_GET_DETAIL_ADMIN_AMANAH: "amanah/informasi-transaksi",
    URL_GET_DETAIL_ADMIN_BPKB: "arrum-bpkb/get-detail",
    URL_GET_DETAIL_ADMIN_HAJI: "arrum-haji/detail-transaksi",
    URL_SUBMIT_UPDATE_MPO: "parameters/mpo/submit",
    URL_DELETE_PARAMETER_MPO: "parameters/mpo/delete",

    URL_GET_LINGKUP_AREA: "/lingkup/area",
    URL_GET_LINGKUP_CABANG: "/lingkup/cabang",
    URL_GET_LINGKUP_KANWIL: "/lingkup/kanwil",
    URL_GET_LINGKUP_OUTLET: "/lingkup/outlet",

    URL_GET_MULIA_ALL_HISTORY_ADMIN: "mulia/history/get-all",
    URL_GET_DETAIL_MULIA_ADMIN: "mulia/history/get-detail",

    // PARAMETERIZE CONTENT START
    URL_GET_LIST_KATEGORI_INFO_PRODUK: "admin/konten/kategori-info-produk",
    URL_GET_KATEGORI_INFO_PRODUK: "admin/konten/kategori-info-produk",
    URL_SUBMIT_KATEGORI_INFO_PRODUK: "admin/konten/kategori-info-produk",
    URL_DELETE_KATEGORI_INFO_PRODUK: "admin/konten/kategori-info-produk",
    URL_SORT_KATEGORI_INFO_PRODUK: "admin/konten/kategori-info-produk/sort",

    URL_GET_LIST_INFO_PRODUK: "admin/konten/info-produk",
    URL_GET_INFO_PRODUK: "admin/konten/info-produk",
    URL_SUBMIT_INFO_PRODUK: "admin/konten/info-produk",
    URL_DELETE_INFO_PRODUK: "admin/konten/info-produk",
    URL_SORT_INFO_PRODUK: "admin/konten/info-produk/sort",

    URL_GET_LIST_HUBUNGI_KAMI: "admin/konten/hubungi-kami",
    URL_GET_HUBUNGI_KAMI: "admin/konten/hubungi-kami",
    URL_SUBMIT_HUBUNGI_KAMI: "admin/konten/hubungi-kami",
    URL_DELETE_HUBUNGI_KAMI: "admin/konten/hubungi-kami",
    URL_GET_LIST_HUBUNGI_KAMI_CATEGORY: "admin/konten/hubungi-kami/kategori",
    URL_SORT_HUBUNGI_KAMI: "admin/konten/hubungi-kami/sort",

    URL_GET_LIST_KATEGORI_FAQ: "admin/konten/kategori-faq",
    URL_GET_KATEGORI_FAQ: "admin/konten/kategori-faq",
    URL_SUBMIT_KATEGORI_FAQ: "admin/konten/kategori-faq",

    URL_GET_LIST_FAQ: "admin/konten/faq",
    URL_GET_FAQ: "admin/konten/faq",
    URL_SUBMIT_FAQ: "admin/konten/faq",

    URL_GET_LIST_SYARAT_DAN_KETENTUAN: "admin/konten/syarat-ketentuan",
    URL_SUBMIT_SYARAT_DAN_KETENTUAN: "admin/konten/syarat-ketentuan",
    URL_GET_LIST_SYARAT_DAN_KETENTUAN_PUBLIC: "konten/syarat-ketentuan",
    // PARAMETERIZE CONTENT END

    // PARAMETERIZE CONTENT PUBLIC START
    URL_GET_PUBLIC_LIST_HUBUNGI_KAMI: "konten/hubungi-kami",
    URL_GET_PUBLIC_LIST_INFO_PRODUK: "konten/info-produk",
    URL_GET_PUBLIC_INFO_PRODUK: "konten/info-produk",
    // PARAMETERIZE CONTENT PUBLIC END

    // should be hidden until further development
    // URL_GET_LIST_NOTIFIKASI: "info/history/get-all",
    URL_GET_ALL_PARAMETER: "parameters/get-all",
    URL_SUBMIT_ALL_PARAMETER: "parameters",
    URL_DELETE_ALL_PARAMETER: "parameters",

    URL_PARAMETER_TASJILY_PRESENTASE: "parameters/tasjily-tanah/munah",
    URL_PARAMETER_TASJILY_DISKON: "parameters/tasjily-tanah/parameter-diskon",
    URL_PARAMETER_TENOR_ARRUM_BPKB: "parameters/arrum-bpkb/tenor",
    URL_GET_ADMIN_TASJILY_TANAH: "tasjily-tanah/get-all-history",
    URL_GET_ID_MULTI_PAYMENT: "mpo",
    URL_RESET_PIN: "user/reset-pin",

    //POST,DELETE,GET

    URL_GET_ADMIN_PARAMETER_ARRUM_BPKB: "parameters/arrum-bpkb/parameter-diskon",
    URL_ADMIN_PARAMETER_PATOK_TAKSIR_BOOKING_RAHN:
        "parameters/booking-rahn/patok-taksir",
    URL_ADMIN_PARAMETER_GOLONGAN_BOOKING_RAHN:
        "parameters/booking-rahn/parameter-golongan",

    //MODAL NOTIFICATION COMPONENT
    MODAL_SUCCESS: "MODAL_SUCCESS",
    MODAL_ERROR: "MODAL_ERROR",
    MODAL_WARNING: "MODAL_WARNING",

    //CONFIG GOOGLE MAPS COMPONENT
    GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    MAPS_DEFAULT_ZOOM: 15,
    MAPS_DEFAULT_CENTER: {lat: -6.21462, lng: 106.84513},

    //CONFIG PROPERTIES
    LOCALE_FORMATTER: "id",
    DATE_FORMATTER: "DD-MM-YYYY",
    HAS_STATUS_CIF: "Yes",
    NO_STATUS_CIF: "No",
    REGEX_NUMBER_ONLY: /^[0-9+]*$/,
    REGEX_CURRENCY_ONLY: /\B(?=(\d{3})+(?!\d))/g,
    REGEX_PARSER_CURRENCY: /\$\s?|(,*)/g,
    REGEX_NUMBER_DECIMAL: /^\d+\.?\d*$/,
    REGEX_ALPHABET_ONLY: /[A-Za-z_]/,
    REGEX_CONTAIN_ALPHABET_NUMBER: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
    REGEX_ALPHABET_NUMBER_ONLY: /^[0-9A-Za-z_]*$/,
    REGEX_FULL_NAME: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
    REGEX_PHONE_NUMBER: "^[0-9]{1,15}$",
    REGEX_EMAIL_FORMAT:
        "^[A-Za-z0-9_]+([.-]?[A-Za-z0-9_]+)*@[A-Za-z0-9_]+([.-]?[A-Za-z0-9_]+)*([.][A-Za-z0-9_]{2,3})+$",
    REGEX_PASSWORD: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$",
    REGEX_PASSWORD_VALIDATION: {
        minChar: "(?=.{8,}$)",
        letterCase: "(?=.*[a-z])(?=.*[A-Z])",
        hasNumber: "(?=.*[0-9])"
    },
    REGEX_PASSWORD_ADMIN: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!]{8,}$",
    REGEX_PHONE_EMAIL:
        "^[0-9]{1,15}$|^[A-Za-z0-9_]+([.-]?[A-Za-z0-9_]+)*@[A-Za-z0-9_]+([.-]?[A-Za-z0-9_]+)*([.][A-Za-z0-9_]{2,3})+$",

    DATE_FORMAT_TO_SERVICE: "DD-MM-YYYY",

    //FLAG DEVICE
    FLAG_DEVICE: "WEB",

    //CONFIG
    TRANSAKSI_EMAS_TYPE: {
        TOP_UP: "OPEN",
        CASH_OUT: "SALE",
    },
    DEFAULT_BANK_CUST_TYPE: "PT.Pegadaian Persero",

    //RAHN STATUS

    STATUS_RAHN_TYPE: {
        APPROVE: "APPROVE",
        PENDING: "PENDING",
        EXPIRED: "EXPIRED",
    },

    RAHN_TYPE_CODE: [
        {
            CODE: "",
            STRING: "Semua Transaksi",
        },
        {
            CODE: "RH",
            STRING: "Rahn Handphone",
        },
        {
            CODE: "REL",
            STRING: "Rahn Elektronik",
        },
        {
            CODE: "RP",
            STRING: "Rahn Perhiasan",
        },
        {
            CODE: "RLM",
            STRING: "Rahn Logam Mulia",
        },
        {
            CODE: "RK",
            STRING: "Rahn Kendaraan",
        },
        {
            CODE: "RL",
            STRING: "Rahn Laptop",
        },
        {
            CODE: "RG",
            STRING: "Rahn Barang Gudang",
        },
    ],

    RAHN_TYPE_CODE_FE: {
        RH: "Handphone",
        REL: "Elektronik",
        RP: "Perhiasan",
        RLM: "Logam Mulia",
        RK: "Kendaraan",
        RL: "Laptop",
        RG: "Gudang",
    },

    MULTI_PAYMENT_TYPE_CODE: {
        PULSA: "Pulsa",
        PAKET_DATA: "Paket Data",
        TOKEN_LISTRIK: "Listrik PLN Token",
        TAGIHAN_LISTRIK: "Listrik PLN Tagihan",
        AIR: "Air PDAM",
        TELKOM: "Telkom",
        BPJS: "BPJS",
        PASCA_BAYAR: "Pasca Bayar",
    },

    GROUP_MULTI_PAYMENT: {
        SELULER: "seluler",
        LISTRIK: "listrik",
        TAGIHAN: "tagihan",
        AIR: "air",
        ASURANSI: "asuransi",
        PASCA_BAYAR: "pascabayar",
        TELKOM: "telkom",
    },

    BOOKING_RAHN_STATUS: {
        STATUS_BOOKING_PENDING: "PENDING",
        STATUS_BOOKING_APPROVE: "APPROVE",
        STATUS_BOOKING_TOLAK: "TOLAK",
        STATUS_BOOKING_EXPIRED: "EXPIRED",
    },

    PENGAJUAN_RAHN_STATUS: {
        STATUS_DITERIMA: "DI TERIMA",
        STATUS_PENDING: "PENDING",
        STATUS_EXPIRED: "EXPIRED",
    },

    PENGAJUAN_RAHN_STATUS_FE: {
        STATUS_DITERIMA: "Diterima",
        STATUS_PENDING: "Pending",
        STATUS_EXPIRED: "Expired",
    },

    STATUS_PEMBAYARAN_TABUNGAN_EMAS: {
        MENUNGGU_PEMBAYARAN: "Menunggu Pembayaran",
        TRANSAKSI_BERHASIL: "Transaksi Berhasil",
        PEMBAYARAN_DIBATALKAN: "Dibatalkan",
        EXPIRED: "Expired",
    },

    STATUS_BOOKING_PEMBIAYAAN: {
        PENDING: "PENDING",
        DITERIMA: "DI TERIMA",
        TOLAK: "TOLAK",
        EXPIRED: "EXPIRED",
    },

    MULTI_PAYMENT_TYPE: [
        {
            CODE: "",
            STRING: "Semua Transaksi",
        },
        {
            CODE: "seluler",
            STRING: "Seluler",
        },
        {
            CODE: "asuransi",
            STRING: "BPJS",
        },
        {
            CODE: "air",
            STRING: "Air PDAM",
        },
        {
            CODE: "listrik",
            STRING: "Listrik PLN",
        },
        {
            CODE: "pascabayar",
            STRING: "Pasca Bayar",
        },
    ],

    PEMBIAYAAN_TYPE: [
        {
            CODE: "",
            STRING: "Semua Transaksi",
        },
        {
            CODE: "AMANAH",
            STRING: "Amanah",
        },
        {
            CODE: "ARRUM_HAJI",
            STRING: "Arrum Haji",
        },
        {
            CODE: "ARRUM_BPKB",
            STRING: "Arrum BPKB",
        },
        {
            CODE: "ARRUM_EMAS",
            STRING: "Arrum Emas",
        },
        {
            CODE: "TASJILY_TANAH",
            STRING: "Tasjily Tanah",
        },
    ],

    PEMBIAYAAN_TYPE_FE: {
        AMANAH: "Amanah",
        ARRUM_HAJI: "Arrum Haji",
        ARRUM_BPKB: "Arrum BPKB",
        ARRUM_EMAS: "Arrum Emas",
        TASJILY_TANAH: "Tasjily Tanah",
    },

    JAMINAN_TYPE_ARRUM_HAJI: {
        PERHIASAN: "PERHIASAN",
        LOGAM_MULIA: "LOGAM_MULIA",
    },

    PEMBAYARAN_RIWAYAT_TRANSAKSI_TYPE: [
        {
            CODE: "",
            STRING: "Semua Transaksi",
        },
        {
            CODE: "MIKRO",
            STRING: "Pembayaran Mikro",
        },
        {
            CODE: "RAHN",
            STRING: "Pembayaran Rahn",
        },
    ],

    STRING_TAB_PANE_RIWAYAT_TRANSAKSI: [
        {
            KEY: "1",
            NAME: "Tabungan Emas",
        },
        {
            KEY: "2",
            NAME: "Rahn",
        },
        {
            KEY: "3",
            NAME: "Pembayaran",
        },
        {
            KEY: "4",
            NAME: "Pembiayaan",
        },
        {
            KEY: "5",
            NAME: "Multi Payment Online",
        },
    ],

    PEMBAYARAN_TYPE: {
        MIKRO: "MIKRO",
        RAHN: "RAHN",
    },

    PRODUCT_TYPE: {
        GADAI_KCA: "01",
        RAHN: "02",
        KREASI: "03",
        KRASIDA: "04",
        KRISTA: "05",
        MULIA: "9",
        KRESNA: "10",
        GADAI_BISNIS: "11",
        GADAI_FLEXI: "12",
        ARRUM: "14",
        AMANAH: "15",
        ARRUM_EMAS: "16",
        ARRUM_HAJI: "17",
        TASJILY_TANAH: "18",
        SAVE_DEPOSIT_BOX: "20",
        RAHN_FLEXI: "21",
        RAHN_BISNIS: "22",
        KREASI_KHUSUS: "23",
        MULIA_PINTAR: "29",
        KCA_KHUSUS: "31",
        KRASIDA_KHUSUS: "34",
        MULIA_ONLINE: "39",
        KRESNA_ONLINE: "40",
        KRESNA_SYARIAH: "41",
        TABUNGAN_EMAS_PEGAWAI: "61",
        TABUNGAN_EMAS: "62",
        RAHN_AGENT: "24",
    },

    RAHN_TYPE: {
        PERHIASAN: "PERHIASAN",
        LOGAM_MULIA: "LOGAM_MULIA",
        LAPTOP: "LAPTOP",
        ELEKTRONIK: "ELEKTRONIK",
        BARANG_GUDANG: "BARANG_GUDANG",
        KENDARAAN: "KENDARAAN",
        HANDPHONE: "HANDPHONE",
    },

    RAHN_TYPE_TO_FE: {
        PERHIASAN: "Perhiasan",
        LOGAM_MULIA: "Logam Mulia",
        ELEKTRONIK: "Elektronik",
        LAPTOP: "Laptop",
        BARANG_GUDANG: "Barang Gudang",
        KENDARAAN: "Kendaraan",
        HANDPHONE: "Handphone",
    },

    JAMINAN_TYPE: {
        GUDANG_ALAT_RUMAH_TANGGA: "BGAR",
        GUDANG_ALAT_TANI: "BGAT",
        GUDANG_KAIN_TEKSTIL: "BGKN",
        GUDANG_LAIN: "BGLL",
        GUDANG_MESIN_JAHIT: "BGMJ",
        GUDANG_SEPEDA: "BGSP",
        ELEKTRONIK_ARLOJI_JAM: "ELAR",
        ELEKTRONIK_BARANG_ELEKTRIK: "ELEL",
        ELEKTRONIK_HANDPHONE: "ELHP",
        ELEKTRONIK_KOMPUTER_LAPTOP: "ELKM",
        ELEKTRONIK_KAMERA: "ELKR",
        ELEKTRONIK_RUMAH_TANGGA: "ELRT",
        ELEKTRONIK_TELEVISI: "ELTV",
        KENDARAAN_MESIN_BERMOTOR: "KNMB",
        KENDARAAN_MOBIL: "KNML",
        KENDARAAN_SEPEDA_MOTOR: "KNSM",
        KANTONG_BERLIAN: "KTBR",
        KANTONG_BATU: "KTBT",
        KANTONG_PERHIASAN_PLG: "KTEL",
        KANTONG_PERHIASAN: "KTEP",
        KANTONG_LANTAKAN_EMAS: "KTLM",
        KANTONG_LOGAM_MULIA: "KTML",
        KANTONG_MUTIARA: "KTMT",
        KANTONG_UANG_EMAS: "KTUE",
        TRUCK: "TRUK",
    },

    EMAS_TRANSACTION: {
        TOP_UP: "TOP_UP",
        BUKA: "BUKA",
        TRANSFER: "TRANSFER",
        JUAL: "JUAL",
        CETAK: "CETAK",
    },

    PAYMENT_TRANSACTION: {
        MIKRO: "MIKRO",
        RAHN: "RAHN",
    },

    AMANAH_CONSUMER_TYPE: {
        PEGAWAI: "Karyawan",
        USAHA: "Pengusaha Mikro",
    },

    AMANAH_VEHICLE_TYPE: {
        BARU: "Baru",
        BEKAS: "Bekas",
    },

    RUBRIK_TYPE: {
        BARANG_GUDANG: "BG",
        BARANG_KANTONG: "KT",
        BARANG_ELEKTRONIK: "EL",
        KENDARAAN: "KN",
        SURAT_BERHARGA: "SB",
        PERSEDIAAN: "PS",
    },

    TABUNGAN_EMAS_TYPE: [
        {
            CODE: "",
            STRING: "Semua Transaksi",
        },
        {
            CODE: "OP",
            STRING: "Buka Tabungan Emas",
        },
        {
            CODE: "OD",
            STRING: "Cetak Emas",
        },
        {
            CODE: "BB",
            STRING: "Jual Emas",
        },
        {
            CODE: "SL",
            STRING: "Top Up Emas",
        },
        {
            CODE: "TR",
            STRING: "Transfer Emas",
        },
    ],

    PROMOTION_TRX_TYPE: {
        BUKA_EMAS: 1,
        TOP_UP_EMAS: 2,
    },

    PROMOTION_USE_STATUS: {
        PROMO_NOT_SET: 0,
        APPLIED: 1,
        REMOVED: 2,
        UPDATED: 3,
        PROMO_NOT_FOUND: 4,
    },

    PROMO_TYPE: {
        GOLDBACK: "goldback",
        DISCOUNT: "discount",
    },

    PEMBAYARAN_RAHN_TYPE: {
        CICIL: "CC",
        ULANG: "UG",
        TEBUS: "TB",
    },

    PEMBAYARAN_RAHN_TYPE_FE: {
        CICIL: "Cicil Rahn",
        ULANG: "Ulang Rahn",
        TEBUS: "Tebus Rahn",
    },

    POLA_PEMBAYARAN_TASJILY_TANAH: {
        POLA_PEMBAYARAN_BULANAN_3: "POLA_PEMBAYARAN_BULANAN_3",
        POLA_PEMBAYARAN_BULANAN_4: "POLA_PEMBAYARAN_BULANAN_4",
        POLA_PEMBAYARAN_BULANAN_6: "POLA_PEMBAYARAN_BULANAN_6",
        POLA_PEMBAYARAN_REGULER: "POLA_PEMBAYARAN_REGULER",
        POLA_PEMBAYARAN_SEKALI_BAYAR: "POLA_PEMBAYARAN_SEKALI_BAYAR",
    },
    CODE_POLA_PEMBAYARAN_TASJILY_TANAH: {
        CODE_3: "03M",
        CODE_4: "04M",
        CODE_6: "06M",
        CODE_REGULER: "01M",
        CODE_SEKALI_BAYAR: "00M",
    },

    //BUTTON_TYPE_COMPONENT
    BUTTON_TYPE: {
        CANCEL: "CANCEL",
        OK: "OK",
        NEXT: "NEXT",
        PREV: "PREV",
    },

    BUTTON_TRANSACTION: {
        RAHN: "RAHN",
        TABUNGAN_EMAS: "TABUNGAN_EMAS",
        PEMBIAYAAN: "PEMBIAYAAN",
        PEMBAYARAN: "PEMBAYARAN",
        CETAK_EMAS: "CETAK_EMAS",
    },

    // CONFIG IMAGE FILE
    FILE_PNG: "PNG",
    FILE_JPG: "JPG",
    FILE_JPEG: "JPEG",
    FILE_IMAGE_JPEG: "image/jpeg",
    FILE_IMAGE_PNG: "image/png",

    //KARAT LOGAM MULIA
    KARAT: 24,

    //FIREBASE CONFIG
    firebaseConfig: {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
    },

    //CONFIG CSV FILE
    FILE_CSV: "CSV",

    MPO: {
        GROUP_URL: {
            PLN: "listrik",
            CELULAR: "seluler",
            POSTPAID: "pascabayar",
            INSURANCE: "asuransi",
            PDAM: "air",
        },
        SERVICE_TYPE: {
            PLN_TOKEN: "MPO-TAGIHAN-LISTRIK-TOKEN",
            INSURANCE_BILL: "MPO-TAGIHAN-ASURANSI",
            PDAM_BILL: "MPO-TAGIHAN-AIR",
        },
        SUB_GROUP: {
            TOKEN: "token",
            PULSA: "pulsa",
            DATA_PLAN: "paket data",
            HANDPHONE: "handphone",
            BPJS: "bpjs",
            PDAM: "pdam",
        },
        SERVICE_NAME: {
            PLN_PREPAID: "PLN Prepaid",
            BPJS_KESEHATAN: "BPJS Kesehatan",
        },
    },

    STRING_VALIDATION: {
        PASSWORD_VALIDATION: "Password minimal 8 karakter dan harus mengandung kombinasi huruf kecil, kapital, dan angka.",
        PASSWORD_NOT_MATCH: "Konfirmasi password tidak sama!",
        PASSWORD_REQUIRED: "Masukkan password anda!",
        EMAIL_REQUIRED: "Masukkan email anda!",
        EMAIL_NOT_VALID: "Alamat email tidak valid!",
        PHONE_NUMBER_REQUIRED: "Masukkan no. hp anda!",
        FULL_NAME_REQUIRED: "Masukkan nama lengkap anda!",
        USERNAME_REQUIRED: "Masukkan email atau no. hp anda!",
        CAPTCHA_REQUIRED: "Isi captcha yang tersedia terlebih dahulu!",
        PASSWORD_CRITERIA: {
            MIN_CHAR: "Minimal 8 karakter",
            LETTER_CASE: "Terdapat huruf besar dan kecil",
            HAS_NUMBER: "Terdapat angka",
            CONFIRMATION_PASSWORD: "Password baru harus sama dengan konfirmasi password"
        }
    },

    STRING_FORMAT: {
        DATE: "DD-MM-YYYY",
        TIME: "HH:mm",
        GET_MINUTE: "minute"
    },

    STRING_TABLE_TITLE: {
        NO: "No.",
        PARAMETER_NAME: "Nama Parameter",
        ACTION: "Action",
        PAYMENT_CATEGORY: "Pola Pembayaran",
        TENOR: "Tenor",
        MUNAH: "Munah",
        TOP_RATE: "Prosentase Atas",
        BOTTOM_RATE: "Prosentase Bawah",
        DISCOUNT: "Diskon",
        TOP_MARHUN: "Marhun Bih Atas",
        BOTTOM_MARHUN: "Marhun Bih Bawah",
        COLLATERAL: "Barang Jaminan",
        APPRAISAL: "Patok Taksir",
        RUBRIC: "Rubik",
        TYPE: "Tipe",
        GROUP: "Golongan",
        MIN: "Min",
        MAX: "Max",
        MARHUN_MINIMAL: "Minimal Marhun Bih",
        MARHUN_MAXIMAL: "Maximal Marhun Bih",
        ROUNDING: "Rounding",
        TOP_APPRAISAL: "Taksiran atas",
        BOTTOM_APPRAISAL: "Taksiran bawah",
        CODE: "Kode",
        DESCRIPTION: "Deskripsi",
        VALUE: "Value",
        DATE: "Tanggal",
        CUSTOMER: "Nasabah",
        APPRAISAL_ESTIMATE: "Perkiraan Taksiran",
        TRANSACTION_SCHEDULE: "Jadwal Transaksi",
        APPLICATION_STATUS: "Status Pengajuan",
        TRANSACTION: "Transaksi",
        BOOKING_CODE: "Kode Booking",
        VEHICLE_TYPE: "Jenis Kendaraan",
        MARHUN_BIH: "Marhun Bih"
    },

    STRING_LABEL: {
        NOTIFICATION_TYPE: "Jenis Notifikasi",
        USER_LIST: "Daftar Pengguna",
        SCOPE: "Lingkup",
        AREA: "Wilayah",
        SEND_DATE: "Tanggal Kirim",
        SEND_TIME: "Waktu Kirim",
        TITLE: "Judul",
        DESCRIPTION: "Deskripsi",
        CONTENT: "Konten",
        PARAMETER: "Parameter",
        SERVICE_CODE: "Kode Layanan",
        BILLER_CODE: "Kode Biller",
        TOKEN_NOMINAL: "Nominal Token",
        PRICE: "Harga",
        OPERATOR: "Operator",
        PRODUCT: "Produk",
        PULSA_NOMINAL: "Nominal Pulsa",
        PLAN_NAME: "Nama Paket",
        OPERATOR_NAME: "Nama Operator",
        SERVICE_NAME: "Nama Layanan",
        SERVICE_TYPE: "Jenis Layanan",
        LOGO_PROVIDER: "Logo Provider",
        NUMBER_OF_MONTHS: "Jumlah Bulan",
        COMPANY_NAME: "Nama Perusahaan",
        EDIT_BANK: "Edit Bank",
        ADD_BANK: "Tambah Bank",
        BANK_CODE: "Kode Bank",
        BANK_NAME: "Nama Bank",
        TRANSACTION_FEE: "Biaya Transaksi",
        BANK_LOGO: "Logo Bank",
        STATUS: "Status",
        BILLING_CATEGORY: "People Billing",
        TRANSFER_GUIDE: "Transfer Guide",
        PAYMENT_CATEGORY: "Pola Pembayaran",
        TENOR: "Tenor",
        MUNAH: "Munah",
        TOP_RATE: "Prosentase Atas",
        BOTTOM_RATE: "Prosentase Bawah",
        DISCOUNT: "Diskon",
        TOP_MARHUN: "Marhun Bih Atas",
        BOTTOM_MARHUN: "Marhun Bih Bawah",
        VALUE: "Value",
        TRANSACTION: "Transaksi",
        APPLICATION_STATUS: "Status Pengajuan",
        NOTIFICATION: "Notifikasi",
        SYARIAH_CUSTOMER: "Nasabah Syariah",
        SLIDER: "Slider",
        SHOW: "Tampilkan",
        CHANGE_PASSWORD: "Ganti Kata Sandi",
        OLD_PASSWORD: "Kata Sandi Lama",
        NEW_PASSWORD: "Kata Sandi Baru",
        CONFIRMATION_PASSWORD: "Konfirmasi Kata Sandi",
        AUDIT_LOG: "Audit Log",
        NEXT_BUTTON: "Selanjutnya",
        SUBMIT_BUTTON: "Submit",
        USERNAME: "Username",
        PASSWORD: "Password",
        CATEGORY: "Kategori",
        SELECT_CATEGORY: "Pilih Kategori"
    },

    STRING_SUBTITLE: {
        RAHN_TRANSACTION: "Transaksi Pengajuan Rahn",
        SYARIAH_CUSTOMER_LIST: "Daftar Nasabah Syariah",
        SLIDER_LIST: "List Slider",
        ADD_SLIDER: "Tambah Slider",
        FINANCING_TRANSACTION: "Transaksi Pengajuan Pembiayaan",
        PARAMETER_LIST: "List Parameter",
        PAYMENT_TRANSACTION: "Transaksi Pembayaran",
        TE_TRANSACTION: "Transaksi Tabungan Emas",
        MPO_TRANSACTION: "Transaksi Multi Payment Online",
        PRINT_TE_TRANSACTION: "Transaksi Cetak Tabungan Emas",
        OPEN_TE_TRANSACTION: "Transaksi Buka Tabungan Emas",
        PASSWORD_COMBINATION_RULES: "Hindari menggunakan kombinasi yang mudah ditebak dan kata sandi situs lain.",
        AUDIT_LOG: "List Log PSDS",
        TABUNGAN_EMAS: "Investasikan dana pribadi Anda dengan tabungan emas kami"
    },

    STRING_PLACEHOLDER: {
        CONFIRMATION_PASSWORD: "Konfirmasi kata sandi",
        PASSWORD: "Kata sandi",
        EMAIL: "Email",
        PHONE_NUMBER: "Nomor handphone",
        FULL_NAME: "Nama lengkap",
        USERNAME: "Email atau no. hp",
        SELECT_SCOPE: "Pilih lingkup",
        SELECT_AREA: "Pilih wilayah",
        SELECT_DATE: "Pilih tanggal",
        SELECT_TIME: "Pilih waktu",
        SELECT_OPERATOR: "Pilih operator",
        TITLE: "Judul",
        DESCRIPTION: "Deskripsi",
        SERVICE_CODE: "Kode layanan",
        BILLER_CODE: "Kode Biller",
        TOKEN_NOMINAL: "Nominal token",
        TOKEN_PRICE: "Harga token (Rp)",
        PULSA_NOMINAL: "Nominal pulsa",
        NOMINAL: "Nominal (Rp)",
        PULSA_PRICE: "Harga pulsa (Rp)",
        PLAN_NAME: "Nama paket",
        OPERATOR_NAME: "Nama Operator",
        SERVICE_NAME: "Nama Layanan",
        SERVICE_TYPE: "Jenis Layanan",
        NUMBER_OF_MONTHS: "Jumlah Bulan",
        COMPANY_NAME: "Nama Perusahaan",
        BANK_CODE: "Kode Bank",
        BANK_NAME: "Nama Bank",
        TRANSACTION_FEE: "Biaya Transaksi (Rp)",
        PAYMENT_CATEGORY: "Pola Pembayaran",
        TENOR: "Tenor",
        MUNAH: "Munah",
        PARAMETER: "Pilih Kode Parameter",
        VALUE: "Value",
        SEARCH_BY_PARAM: "Cari Berdasarkan Parameter",
        SEARCH: "Cari",
        APPLICATION_STATUS: "Status Pengajuan",
        SELECT_ITEM_TYPE: "Pilih Jenis Baranng",
        NOTIFICATION_LIST: "Daftar Notifikasi",
        CONTENT_TITLE: "Input Judul Konten",
        SEARCH_BY_CUSTOMER: "Cari Nama Nasabah",
        START_DATE: "Tanggal Awal",
        END_DATE: "Tanggal Akhir",
        OLD_PASSWORD: "Kata Sandi Lama",
        NEW_PASSWORD: "Kata Sandi Baru",
        ADD_NEW_BANK_ACCOUNT: "Tambah Rekening Baru",
        NEW_BANK_ACCOUNT_NAME: "Nama Rekening Baru"
    },

    STRING_PRODUCT_TYPE: {
        ARRUM_HAJI: "ARRUM_HAJI",
        ARRUM_EMAS: "ARRUM_EMAS",
        ARRUM_BPKB: "ARRUM_BPKB",
        AMANAH: "AMANAH"
    },

    STRING_TAB_PANE: {
        PULSA: "Pulsa",
        DATA_PLAN: "Paket Data",
        PLN_TOKEN: "Token Listrik",
        PLN: "Listrik",
        TELKOM: "Telkom",
        PDAM: "PDAM",
        BPJS: "BPJS",
        PHONE_POSTPAID: "HP Pascabayar",
        OPERATOR: "Operator",
        EDITABLE: "Editable",
        ADDABLE: "Addable",
        CUSTOMER_DATA: "Data Nasabah",
        GENERAL_INFORMATION: "Informasi Umum",
        COLLATERAL: "Barang Jaminan",
        OPEN_TE: "Buka Tabungan Emas",
        TOPUP_TE: "Top Up",
        BUYBACK_TE: "Jual / Buy Back",
        TRANSFER_TE: "Transfer",
        PRINT_TE: "Cetak Emas",
        BUY_MULIA: "Beli Mulia",
        AGUNAN: "Agunan",
        TRANSACTION_DETAIL: "Detail Transaksi",
        BUY_AND_PICKUP: "Pembelian & Pengambilan"
    },

    STRING_TAB_TYPE: {
        EDITABLE: "EDITABLE",
        ADDABLE: "ADDABLE"
    },

    STRING_BANK_ACCOUNT_TYPE: {
        PERSONAL: "PRIBADI",
        OTHERS: "LAINNYA",
        NEW: "BARU"
    },

    STRING_FIELD_DECORATOR: {
        RULES_MESSAGE_NOTIFICATION_TYPE: "Jenis Notifikasi harus dipilih !",
        RULES_MESSAGE_USER_LIST: "Daftar Pengguna wajib diunggah!",
        RULES_MESSAGE_AREA_REQUIRED: "Wilayah wajib dipilih !",
        RULES_MESSAGE_DATE_REQUIRED: "Tanggal kirim harus diisi !",
        RULES_MESSAGE_TIME_REQUIRED: "Waktu kirim harus diisi !",
        RULES_MESSAGE_TITLE_REQUIRED: "Judul harus diisi !",
        RULES_MESSAGE_DESCRIPTION_REQUIRED: "Deskripsi harus diisi !",
        RULES_MESSAGE_SCOPE_REQUIRED: "Lingkup wajib dipilih !",
        RULES_MESSAGE_SERVICE_CODE_REQUIRED: "Kode Layanan wajib diisi !",
        RULES_MESSAGE_BILLER_CODE_REQUIRED: "Kode Biller wajib diisi !",
        RULES_MESSAGE_NOMINAL_REQUIRED: "Nominal harus diisi !",
        RULES_MESSAGE_NOMINAL_ISNUMBER: "Nominal harus Angka",
        RULES_MESSAGE_TOKEN_NOMINAL_REQUIRED: "Nominal Token harus diisi !",
        RULES_MESSAGE_PULSA_NOMINAL_REQUIRED: "Nominal Pulsa harus diisi !",
        RULES_MESSAGE_TOP_UP_NOMINAL_REQUIRED: "Nominal Top Up harus diisi !",
        RULES_MESSAGE_PRICE_REQUIRED: "Harga harus diisi !",
        RULES_MESSAGE_OPERATOR_REQUIRED: "Operator wajib dipilih !",
        RULES_MESSAGE_PRODUCT_REQUIRED: "Produk wajib dipilih !",
        RULES_MESSAGE_MUST_NUMBER: "Harus angka !",
        RULES_MESSAGE_PLAN_NAME_REQUIRED: "Nama paket harus diisi !",
        RULES_MESSAGE_OPERATOR_NAME_REQUIRED: "Nama operator harus diisi !",
        RULES_MESSAGE_SERVICE_NAME_REQUIRED: "Nama layanan harus diisi !",
        RULES_MESSAGE_SERVICE_TYPE_REQUIRED: "Jenis layanan harus diisi !",
        RULES_MESSAGE_LOGO_PROVIDER_REQUIRED: "Logo provider harus diisi !",
        RULES_MESSAGE_NUMBER_OF_MONTHS_REQUIRED: "Jumlah bulan wajib diisi !",
        RULES_MESSAGE_COMPANY_NAME_REQUIRED: "Nama perusahaan wajib diisi !",
        RULES_MESSAGE_BANK_REQUIRED: "Bank wajib dipilih",
        RULES_MESSAGE_BANK_CODE_REQUIRED: "Kode bank wajib diisi !",
        RULES_MESSAGE_BANK_NAME_REQUIRED: "Nama bank wajib diisi !",
        RULES_MESSAGE_TRANSACTION_FEE_REQUIRED: "Biaya transaksi wajib diisi !",
        RULES_MESSAGE_BANK_LOGO_REQUIRED: "Logo bank wajib diisi !",
        RULES_MESSAGE_BANK_STATUS_REQUIRED: "Status wajib diisi !",
        RULES_MESSAGE_BILLING_CATEGORY_REQUIRED: "People billing wajib diisi !",
        RULES_MESSAGE_PAYMENT_CATEGORY_REQUIRED: "Pola pembayaran wajib diisi !",
        RULES_MESSAGE_TENOR_REQUIRED: "Tenor wajib diisi !",
        RULES_MESSAGE_MUNAH_REQUIRED: "Munah wajib diisi !",
        RULES_MESSAGE_TOP_RATE_REQUIRED: "Prosentase atas wajib diisi !",
        RULES_MESSAGE_BOTTOM_RATE_REQUIRED: "Prosentase bawah wajib diisi !",
        RULES_MESSAGE_DISCOUNT_REQUIRED: "Diskon wajib diisi !",
        RULES_MESSAGE_TOP_MARHUN_REQUIRED: "Marhun Bih atas wajib diisi !",
        RULES_MESSAGE_BOTTOM_MARHUN_REQUIRED: "Marhun Bih bawah wajib diisi !",
        RULES_MESSAGE_VALUE_REQUIRED: "Value wajib diisi !",
        RULES_MESSAGE_OLD_PASSWORD_REQUIRED: "Isi kata sandi lama anda !",
        RULES_MESSAGE_OLD_PASSWORD_RULES: "Kata sandi harus memiliki minimal 8 karakter !",
        RULES_MESSAGE_NEW_PASSWORD_REQUIRED: "Isi kata sandi baru anda !",
        RULES_MESSAGE_NEW_PASSWORD_RULES: "Kata sandi minimal 8 karakter dan harus mengandung kombinasi huruf kecil, kapital, dan angka",
        RULES_MESSAGE_OLD_NEW_PASSWORD_NOT_MATCH: "Konfirmasi kata sandi baru tidak sesuai !",
        RULES_MESSAGE_CONVERSION_REQUIRED: "Harap melakukan konversi terlebih dahulu",
        RULES_MESSAGE_BANK_ACCOUNT_REQUIRED: "Rekening Wajib Dipilih !"
    },

    STRING_IMG_ALT: {
        LOGO_PROVIDER: "Logo Provider"
    },

    STRING_RESPONSE: {
        SUCCESS: "OK",
        FAILED: "GAGAL",
        ERROR: "ERROR"
    },

    STRING_NOTIFLIX: {
        WAITING: "Mohon Menunggu..."
    },

    STRING_MODAL: {
        TITLE_SUCCESS: "Berhasil",
        TITLE_FAILED: "Gagal",
        TITLE_ATTENTION: "Perhatian",
        TITLE_WARNING: "Peringatan",
        TITLE_DELETE_DATA: "Hapus Data",
        TITLE_ADD_DATA: "Tambah Data",
        TITLE_EDIT_DATA: "Edit Data",
        TITLE_SORT_DATA: "Urutkan",
        TITLE_SELECT_GOLD_BANK_ACCOUNT: "Pilih Rekening Emas",
        TITLE_SELECT_OTHERS_BANK_ACCOUNT: "Pilih Rekening Lain",
        TITLE_SUCCESS_TRANSACTION: "Transaksi Berhasil",
        TITLE_INCOMPLETE_DATA: "Data akun anda tidak lengkap",
        TITLE_SOMETHING_WRONG: "Terjadi Kesalahan",
        DATA_NOT_VALID: "Ada data yang tidak valid, harap cek inputan anda !",
        CONTENT_OUTLET_REQUIRED: "Outlet harus di pilih",
        CONTENT_FAILURE: "Terjadi kesalahan pada sistem, silahkan mencoba beberapa saat lagi.",
        CONTENT_GOLD_BALANCE_EXCEED: "Jumlah gram melebihi saldo emas anda",
        CONTENT_DATA_REQUIRED: "Data harus dipilih",
        CONTENT_BANK_ACCOUNT_REQUIRED: "Rekening harus dipilih",
        LOGIN_SUCCESS: "Login berhasil.",
        LOGOUT_SUCCESS: "Berhasil logout",
        ACTIVATION_SUCCESS: "Aktivasi akun berhasil.",
        CHANGE_PIN_QUESTION: "Anda yakin apakah akan Melakukan Reset PIN Agen ini?",
        REGISTRATION_SUCCESS: "Registrasi berhasil, silahkan membuka email anda untuk melakukan aktivasi akun.",
        CAPTCHA_FAILED: "Verifikasi captcha tidak berhasil, silahkan melakukan verifikasi ulang.",
        RESET_PASSWORD_SUCCESS: "Reset password berhasil, silahkan melakukan login dengan password yang baru.",
        CHANGE_DATA_SUCCESS: "Berhasil mengubah data",
        DELETE_DATA_SUCCESS: "Berhasil menghapus data",
        SAVE_DATA_SUCCESS: "Berhasil menyimpan data",
        CHANGE_DATA_FAILED: "Tidak berhasil mengubah data !",
        IMAGE_REQUIRED: "File tidak boleh kosong !",
        IMAGE_UPLOAD_SUCCESS: "File berhasil diupload",
        IMAGE_TOO_LARGE: "Ukuran File Harus Kurang dari 2 MB",
        ERROR_UPLOAD_IMAGE: "Error saat upload image",
        ADD_BANK_FAILED: "Penambahan bank tidak berhasil !",
        ADD_BANK_SUCCESS: "Penambahan bank berhasil.",
        WRONG_DATA: "Data yang anda masukkan salah, silahkan melakukan proses input kembali !",
        BOTTOM_RATE_HIGHER_THAN_TOP_RATE: "Prosentase bawah harus di bawah prosentase atas",
        RATE_ABOVE_100: "Minimal dan maksimal prosentase awal 0%-100%",
        BOTTOM_MARHUN_HIGHER_THAN_TOP_MARHUN: "Marhun bih bawah harus di bawah Marhun bih atas",
        MARHUN_BELOW_0: "Marhun bih tidak boleh kurang dari 0",
        BOTTOM_APPRAISAL_HIGHER_THAN_TOP_APPRAISAL: "Taksiran bawah harus di bawah taksiran atas",
        APPRAISAL_ABOVE_0: "Minimal dan maksimal taksiran awal 0%-100%",
        DATA_NOT_FOUND: "Data tidak ditemukan !",
        CHANGE_PASSWORD_SUCCESS: "Berhasil merubah password !",
        ERROR_GET_PROMOTION: "Error get promotions",
        COMPLETE_BIO_REQUIRED: "Mohon isi biodata anda secara lengkap",
        OLD_PASSWORD_CANT_SAME_WITH_NEW_PASSWORD: 'Password baru tidak boleh sama dengan password yang lama!',
        SUCCESS_RESET_PASSWORD: 'Berhasil reset password, silahkan login',
        MODAL_DISMISS: 5000,
        MODAL_DISMISS_SHORT: 1500,
        MODAL_DISMISS_MEDIUM: 3000
    },

    STRING_TIPE_OTP: {
        REGISTRATION_AGEN: "REGISTRATION_AGEN"
    },

    STRING_PARAMETER_MENU: {
        ALL_PARAM: "All Parameter",
        ARRUM_BPKB_DISCOUNT: "Parameter Diskon Arrum BPKB",
        ARRUM_BPKB_TENOR: "Tenor Arrum BPKB",
        RAHN_CUSTOMER_BOOKING_CATEGORY: "Parameter Golongan Booking Rahn Nasabah",
        RAHN_APPRAISAL_BOOKING: "Patok Taksir Booking Rahn",
        TASJILY_TANAH_MUNAH: "Tasjily Tanah Munah",
        TASJILY_TANAH_MUNAH_DISCOUNT: "Tasjily Tanah Diskon Munah"
    },

    STRING_NOTIFIKASI: {
        TIME_ERROR: "Menit waktu kirim harus 00 atau 30",
        ADD_NOTIF_SUCCESS: "Berhasil menambah notifikasi",
        UPLOAD_CSV_SUCCESS: "Berhasil upload file csv"
    },

    STRING_LOCALSTORAGE: {
        ACCESS_TOKEN: "access_token",
        FULL_NAME: "fullName",
        SALDO_TABUNGAN: "saldo_tabungan",
        ROLE: "role",
        PRIVILEGE_LIST: "privilegeList",
        ID: "id",
        PROFILE_USER_ID: "profile_user_id",
        DEVICE_ID: "device_id"
    },

    STRING_MESSAGE: {
        TOKEN_EXPIRED: "Token anda habis, harap login kembali"
    },

    // static route
    ROUTE_TO_INDEX: "/",
    ROUTE_TO_PROFIL: "/dashboard/profil",
    ROUTE_TO_DASHBOARD: "/dashboard",
    ROUTE_TO_CONTACT_US: "/dashboard/contact-us",
    ROUTE_TO_PRODUK: "/dashboard/produk",
    ROUTE_TO_OUTLET: "/dashboard/outlet",
    ROUTE_TO_RIWAYAT: "/dashboard/riwayat-transaksi",
    ROUTE_TO_RAHN: "/dashboard/rahn",
    ROUTE_TO_TABUNGAN_EMAS: "/dashboard/tabungan-emas",
    ROUTE_TO_PEMBAYARAN: "/dashboard/pembayaran",
    ROUTE_TO_PEMBIAYAAN: "/dashboard/pembiayaan",
    ROUTE_TO_MULTI_PAYMENT: "/dashboard/multi-payment",
    ROUTE_NASABAH_SYARIAH: "/admin/nasabah-syariah",
    ROUTE_TO_ADMIN_USERNAME_CONFIRMATION: "/admin-username-confirmation",
    ROUTE_TO_FORGOT_PASSWORD: "/forgot-password",
    ROUTE_TO_FORGOT_PASSWORD_VERIFY: "/forgot-password-verify/",
    ROUTE_TO_INFO_PRODUK: "/info-produk",
    ROUTE_ACTIVATION_NASABAH: "/activation-nasabah/",
    ROUTE_TO_LOGIN_ADMIN: "/login-admin",
    ROUTE_TO_ADMIN_FORGOT_PASSWORD: "/admin-forgot-password",
    ROUTE_TO_ADMIN_RESET_PASSWORD: "/admin-reset-password/",
    ROUTE_TATA_CARA_PEMBAYARAN: "/tata-cara-pembayaran",
    ROUTE_TO_INFO_HARGA_LOGAM_MULIA: "/info-harga-logam-mulia",
    ROUTE_TO_CONTACT_US_INDEX: "/contact-us",
    ROUTE_TO_SYARAT_DAN_KETENTUAN: "/syarat-dan-ketentuan",
    ROUTE_TO_FAQ: "/faq",
    ROUTE_TO_MAINTENANCE: "/maintenance",
    ROUTE_TO_NOTIFICATION_DETAIL: "/notification-detail",
    ROUTE_TO_ADMIN: "/admin/*",
    ROUTE_TO_PERBANDINGAN_HARGA_EMAS: "/perbandingan-harga-emas",
    ROUTE_TO_NOTIFIKASI_NOTA_TRANSAKSI_EMAS: "/notifikasi-nota-transaksi-emas",

    DUMMY_DATA_NOTIFIKASI_NOTA_TRANSAKSI_EMAS: {
        loadingTime: 1500
    },

    STRING_MAINTENANCE: {
        IS_MAINTENANCE: false
    },

    STATUS_ENUM: {
        ENABLED: "Enabled",
        DISABLED: "Disabled"
    },

    BUTTON_LABEL: {
        SAVE: 'Simpan',
        SAVING: 'Menyimpan',
        DELETE: 'Hapus',
        DELETING: 'Menghapus',
        CANCEL: 'Batal',
        EDIT: 'Ubah',
        BACK_TO_TOP: 'Kembali ke Atas',
        SORT: 'Urutkan',
        SORTING: 'Mengurutkan'
    },

    STRING_PAGE_GENERAL: {
        CONTACT_US: {
            TITLE: "Hubungi Kami",
            DESCRIPTION: "Butuh bantuan atau informasi lebih lanjut ? Tim kami siap melayani."
        },
        INFO_PRODUK: {
            TITLE: "Produk Pegadaian Syariah",
            DESCRIPTION: "Pegadaian Syariah adalah solusi tepat kebutuhan dana cepat yang sesuai syariah."
        },
        NOT_FOUND: {
            TITLE: "Maaf, terjadi kesalahan",
            DESCRIPTION: "Halaman yang kamu cari tidak ditemukan."
        },
        FAQ: {
            TITLE: "FAQ",
            DESCRIPTION: "Temukan seluruh informasi yang kamu butuhkan seputar Pegadaian Syariah."
        }
    },

    STRING_RESPONSIVE_WIDTH: {
        xs: 360,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    },

    ROLES: {
        CABANG: "admin_cabang",
        ADMIN: "admin",
        CALL_CENTER: "call_centre",
    },

    URL_MINIO: {
        ICON: {
            CHECKMARK: "pegadaian-pds/checkmark.png"
        }
    }
};

export default Constant;
