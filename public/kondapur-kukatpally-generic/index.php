<?php
session_start();
$b1 = rand(1, 9);
$b2 = rand(1, 9);
$_SESSION['cap_banner'] = $b1 + $b2;
$c1 = rand(1, 9);
$c2 = rand(1, 9);
$_SESSION['cap_cta'] = $c1 + $c2;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Best ENT Hospital in LB Nagar, Hyderabad | Kamineni Hospitals</title>
    <link rel="canonical" href="https://kaminenihospitals.com/ent-lbnagar/" />
    <meta name="description"
        content="Consult leading ENT specialists in LB Nagar for sinus, ear, nose, throat, and hearing disorders with advanced diagnosis and treatment.">
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" href="images/fav-icon.png" sizes="32x32" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <script src="js/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="css/style.css?<?php echo time(); ?>" />
    <link rel="stylesheet" href="css/responsive.css?<?php echo time(); ?>" />

    <!-- Google Tag Manager -->
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WKHDF6N');
    </script>
    <!-- End Google Tag Manager -->

    <style>
        @media (max-width: 767px) {
            .ent-cards.owl-carousel {
                display: block;
                margin: 0;
            }

            .ent-cards.owl-carousel .ent-card {
                width: 98%;
                margin: 0 auto;
            }

            .ent-cards.owl-carousel .owl-nav {
                display: flex;
                margin-top: 12px;
                justify-content: center;
            }

            .ent-cards.owl-carousel .owl-nav button {
                background: #007bbd !important;
                color: #fff !important;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 18px;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20px 5px 0;
            }

            .ent-cards.owl-carousel .owl-nav button:hover {
                background: #005f94 !important;
            }

            .vtesti-grid.owl-carousel {
                display: block;
                margin: 0;
            }

            .vtesti-grid.owl-carousel .vtesti-card {
                width: 98%;
                margin: 0 auto;
            }

            .vtesti-grid.owl-carousel .owl-nav {
                display: flex;
                justify-content: center;
                margin-top: 25px;
            }

            .vtesti-grid.owl-carousel .owl-nav button {
                background-color: #f5fafd !important;
                border: 1px solid #f5fafd;
                color: #007db7 !important;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-size: 18px;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px;
                transition: all 0.4s;
            }

            .vtesti-grid.owl-carousel .owl-nav button:hover {
                background-color: transparent !important;
                color: #f5fafd !important;
            }
        }

        /* ---- Location card links ---- */
        .loc-card-name a,
        .loc-card-addr a {
            color: inherit;
            text-decoration: none;
        }

        .loc-card-contact a {
            color: inherit;
            text-decoration: none;
        }

        .loc-card-contact a:hover {
            text-decoration: underline;
        }

        .loc-card-img-wrap a {
            display: block;
        }

        /* ---- Fixed Bottom Strip ---- */
        .fixed-bottom-strip {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            z-index: 99999;
            box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.18);
        }

        .fbs-btn {
            flex: 1;
            text-align: center;
            padding: 8px 10px;
            font-size: 14px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-family: inherit;
            letter-spacing: 0.3px;
        }

        .fbs-call {
            background: #007bbd;
            color: #fff !important;
        }

        .fbs-book {
            background: #82a51f;
            color: #fff;
        }

        .fbs-btn i {
            font-size: 20px;
            width: 30px;
            height: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
        }

        .fbs-btn img {
            width: 30px;
        }

        /* ---- Sidebar Form Popup ---- */
        @keyframes sbSlideUp {
            from {
                opacity: 0;
                transform: translateY(40px) scale(0.97);
            }

            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .sb-popup-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: transparent;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 9999;
            align-items: center;
            justify-content: center;
        }

        .sb-popup-overlay.active {
            display: flex;
        }

        .sb-popup-overlay.active .sb-popup-box {
            animation: sbSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .sb-popup-box {
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 0 20px 50px;
        }

        .sb-popup-close {
            position: absolute;
            top: 25px;
            right: 18px;
            background: none;
            border: none;
            font-size: 25px;
            padding: 8px 12px;
            color: #000;
            background-color: #a7ce38;
            border-radius: 500%;
            line-height: 1;
            z-index: 9;
            transition: all 0.4s;
        }

        .sb-popup-close:hover {
            color: #007bbd;
        }

        /* ---- Desktop: vertical side strip ---- */
        @media (min-width: 768px) {
            .fixed-bottom-strip {
                bottom: auto;
                left: auto;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: auto;
                flex-direction: column;
                border-radius: 10px 0 0 10px;
                overflow: hidden;
            }

            .fbs-btn {
                flex: none;
                flex-direction: column;
                gap: 6px;
                padding: 20px 7px 20px 10px;
                font-size: 10px;
                width: 90px;
                text-align: center;
            }

            .fbs-btn i {
                font-size: 22px;
                justify-content: center;
            }

            .fbs-btn img {
                width: 30px;
            }

            .sb-popup-close {
                top: -10px;
                right: 10px;
                font-size: 21px;
                padding: 7px 10px;
            }

            .sb-popup-box {
                overflow-y: unset;
            }
        }
    </style>
</head>

<body>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKHDF6N" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <header class="header">
        <div class="container">
            <div class="header-inr">
                <div class="logo-area">
                    <img src="images/logo.png" alt="Logo" class="img-fluid">
                </div>
                <div class="header-right">
                    <a class="phone-btn" href="tel:+917036270362">
                        <i class="fa-solid fa-phone-volume"></i>
                        +91 70362 70362
                    </a>
                    <div class="emergency-badge desk-view">
                        <img src="images/24-7-logo-1.svg" alt="24 Emergancy Service" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="banner-content">
                        <div class="heading">
                            <h2>100% Trusted <br></h2>
                            <h1>ENT Treatment in Hyderabad!</h1>
                            <p><strong>Painless Procedures | Bloodless Technology | No-Scar Recovery</strong></p>
                        </div>
                        <p class="banner-desc">Don't ignore persistent sinus issues, ear discomfort, throat pain, or
                            voice changes.
                            <span>Consult the ENT team</span>
                        </p>

                        <div class="stats-row">
                            <div class="stat-pill">
                                <i class="fa-solid fa-briefcase-medical"></i>
                                <div>
                                    <div class="num">34+ Years</div>
                                    <div class="lbl">Clinical Experience</div>
                                </div>
                            </div>
                            <div class="stat-pill">
                                <i class="fa-solid fa-bullseye"></i>
                                <div>
                                    <div class="num">10,000+</div>
                                    <div class="lbl">Successful Procedures</div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="countdown-section">
                            <div class="countdown-title">Limited Time Offer</div>
                            <div class="countdown-row">
                                <div class="cd-unit">
                                    <div class="cd-blocks">
                                        <div class="cd-block" id="d1">0</div>
                                        <div class="cd-block" id="d2">0</div>
                                    </div>
                                    <div class="cd-label">Days</div>
                                </div>
                                <div class="cd-sep">:</div>
                                <div class="cd-unit">
                                    <div class="cd-blocks">
                                        <div class="cd-block" id="h1">0</div>
                                        <div class="cd-block" id="h2">0</div>
                                    </div>
                                    <div class="cd-label">Hours</div>
                                </div>
                                <div class="cd-sep">:</div>
                                <div class="cd-unit">
                                    <div class="cd-blocks">
                                        <div class="cd-block" id="m1">0</div>
                                        <div class="cd-block" id="m2">0</div>
                                    </div>
                                    <div class="cd-label">Minutes</div>
                                </div>
                                <div class="cd-sep">:</div>
                                <div class="cd-unit">
                                    <div class="cd-blocks">
                                        <div class="cd-block" id="s1">0</div>
                                        <div class="cd-block" id="s2">0</div>
                                    </div>
                                    <div class="cd-label">Seconds</div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>

                <div class="col-lg-4">
                    <?php include 'sidebar-form.php'; ?>
                </div>
            </div>
        </div>
    </section>

    <div class="stats-bar">
        <div class="stats-bar-item">
            <div class="hex-wrap">
                <svg class="hex-bg" viewBox="0 0 90 104">
                    <polygon points="45,2 88,26 88,78 45,102 2,78 2,26" fill="#007bbd" />
                </svg>
                <div class="hex-num" data-target="0" data-suffix="%">0%</div>
            </div>
            <div class="item-title">Post-Op Infection Rate</div>
            <div class="item-sub">NABH Certified Protocols</div>
        </div>
        <div class="stats-bar-item">
            <div class="hex-wrap">
                <svg class="hex-bg" viewBox="0 0 90 104">
                    <polygon points="45,2 88,26 88,78 45,102 2,78 2,26" fill="#007bbd" />
                </svg>
                <div class="hex-num" data-target="98" data-suffix="%">0%</div>
            </div>
            <div class="item-title">Surgical Success Rate</div>
            <div class="item-sub">NABH Certified Protocols</div>
        </div>
        <div class="stats-bar-item">
            <div class="hex-wrap">
                <svg class="hex-bg" viewBox="0 0 90 104">
                    <polygon points="45,2 88,26 88,78 45,102 2,78 2,26" fill="#007bbd" />
                </svg>
                <div class="hex-num" data-target="95" data-suffix="%">0%</div>
            </div>
            <div class="item-title">Patient Recommendation Rate</div>
            <div class="item-sub">Across Hyderabad</div>
        </div>
        <div class="stats-bar-item">
            <div class="hex-wrap">
                <svg class="hex-bg" viewBox="0 0 90 104">
                    <polygon points="45,2 88,26 88,78 45,102 2,78 2,26" fill="#007bbd" />
                </svg>
                <div class="hex-num" data-target="100" data-suffix="%">0%</div>
            </div>
            <div class="item-title">Minimally Invasive Procedure</div>
            <div class="item-sub">US-FDA Approved</div>
        </div>
    </div>


    <!-- =========== Advanced ENT Treatments =========== -->

    <section class="ent-section">
        <div class="container">
            <div class="ent-head heading">
                <h2><span>Advanced ENT Treatments</span><br> For Your Family</h2>
                <p>From routine infections to more complex conditions, get expert care for ear, nose and throat concerns
                    across children and adults, with treatment planned around age, symptoms, and clinical needs.</p>
            </div>
            <div class="ent-divider"></div>
            <div class="ent-bx">
                <div class="ent-cards">
                    <div class="ent-card">
                        <img src="images/ear-otology.jpg" alt="Ear Otology Treatment" class="ent-card-img">
                        <div class="ent-card-lbl">Ear (Otology)</div>
                    </div>
                    <div class="ent-card">
                        <img src="images/nose-rhinology.jpg" alt="Nose Rhinology Treatment" class="ent-card-img">
                        <div class="ent-card-lbl">Nose (Rhinology)</div>
                    </div>
                    <div class="ent-card">
                        <img src="images/throat-andvoice.jpg" alt="Throat and Voice Treatment" class="ent-card-img">
                        <div class="ent-card-lbl">Throat &amp; Voice (Laryngology)</div>
                    </div>
                </div>

                <div class="ent-bottom">
                    <div class="ent-desc">
                        <strong>Our ENT specialists in Hyderabad</strong> use US-FDA approved technology to offer
                        painless, bloodless, and
                        "no-scar" solutions. Whether it is micro-ear surgery for hearing restoration or tonsil removal
                        for your child, we
                        ensure a 0% post-op infection rate and rapid recovery.
                    </div>
                    <div class="ent-tags">
                        <span class="tag tag-b">Ear Infection Treatment</span>
                        <span class="tag tag-g">Sinus Infection Treatment</span>
                        <span class="tag tag-b">Hearing Loss Treatment</span>
                        <span class="tag tag-b">Tinnitus (Ringing in Ears)</span>
                        <span class="tag tag-b">Vertigo Treatment</span>
                        <span class="tag tag-b">Nose Blockage / Deviated Septum (DNS)</span>
                        <span class="tag tag-b">Sleep Apnea Treatment</span>
                        <span class="tag tag-b">Tonsil Infection</span>
                        <span class="tag tag-b">Adenoids Treatment</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- =========== Advanced ENT Treatments End =========== -->


    <!-- =========== Doctors Section =========== -->
    <section class="doc-section">
        <div class="container">

            <div class="heading text-center">
                <h2><span>Consult the Best ENT Specialists</span><br> in Hyderabad</h2>
                <hr>
            </div>

            <div class="doc-layout">

                <!-- Left: large photo -->
                <div class="doc-main-wrap">
                    <img src="images/dr-3.jpg" alt="Dr. Swetha" class="doc-main-img" id="docMainImg">
                    <div class="doc-main-overlay">
                        <div class="doc-main-name" id="docMainName">Dr. Ayyappa Swamy Amara</div>
                        <div class="doc-main-role" id="docMainRole">Fellowship Diploma In Lateral Skull Base Surgery
                        </div>
                    </div>
                </div>

                <!-- Right: info panel -->
                <div class="doc-panel">

                    <!-- Thumbnail row -->
                    <div class="doc-thumbs">
                        <div class="doc-thumb active" data-idx="0">
                            <img src="/wp-content/uploads/2026/01/dr.ayyappa-swamy.jpg" alt="Dr. Ayyappa Swamy Amara">
                        </div>

                        <div class="doc-thumb" data-idx="1">
                            <img src="/wp-content/uploads/2023/06/DR.anand_.jpg" alt="DR. C. Anand Kumar">
                        </div>

                        <div class="doc-thumb" data-idx="2">
                            <img src="/wp-content/uploads/2023/06/Dr.Swetha.jpg" alt="DR. SWETHA">
                        </div>

                    </div>

                    <!-- Nav arrows -->
                    <div class="doc-nav">
                        <button class="doc-nav-btn" id="docPrev">&#9664;</button>
                        <button class="doc-nav-btn" id="docNext">&#9654;</button>
                    </div>

                    <!-- Doctor details -->
                    <div class="doc-details">
                        <h3 class="doc-name" id="docName">Dr. Ayyappa Swamy Amara</h3>
                        <div class="doc-qual" id="docQual">MBBS, MS (ENT)</div>
                        <p class="doc-bio" id="docBio">Consultant ENT and Skullbase Surgeon</p>
                        <div class="doc-title-role" id="docTitleRole">Fellowship Diploma In Lateral Skull Base Surgery
                        </div>
                        <div class="doc-avail-label">Availability</div>
                        <div class="doc-avail-row">
                            <div class="doc-avail-info">
                                <div class="doc-days" id="docDays">Wed - Fri</div>
                                <div class="doc-time" id="docTime">9.00 AM - 3.00 PM</div>
                            </div>
                            <a href="#" class="doc-book-btn">Book an Appointment</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- =========== Doctors Section End =========== -->


    <!-- =========== Locations Section =========== -->
    <section class="loc-section">
        <div class="container">
            <div class="loc-layout">

                <div class="loc-left">
                    <div class="heading">
                        <h2>Our <span>Locations</span></h2>
                    </div>
                    <p class="loc-sub">Book Your Consultation<br>At Kamineni Hospitals</p>
                    <div class="loc-divider"></div>
                    <p class="loc-choose">Choose clinic location</p>
                    <a href="tel:+917036270362" class="loc-contact-btn">Contact Us</a>
                </div>

                <div class="loc-cards">
                    <div class="loc-card">
                        <div class="loc-card-img-wrap">
                            <a href="https://maps.app.goo.gl/S8XJecht1ekDWfMk8" target="_blank" rel="noopener">
                                <img src="images/l.b.-nagar-loction.jpg" alt="LB Nagar Hospital" class="loc-card-img">
                            </a>
                        </div>
                        <div class="loc-card-body">
                            <div class="loc-card-name"><a href="https://maps.app.goo.gl/S8XJecht1ekDWfMk8"
                                    target="_blank" rel="noopener">L.B.NAGAR, Hyderabad</a></div>
                            <p class="loc-card-addr"><a href="https://maps.app.goo.gl/S8XJecht1ekDWfMk8" target="_blank"
                                    rel="noopener">Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda,
                                    Hyderabad, Telangana 500068.</a></p>
                            <div class="loc-card-contact"><i class="fa-solid fa-phone-volume"></i> <a
                                    href="tel:+917036270362">+91 70362 70362</a></div>
                            <div class="loc-card-contact"><i class="fa-solid fa-location-dot"></i> <a
                                    href="mailto:info@kaminenihospitals.com">info@kaminenihospitals.com</a></div>
                        </div>
                    </div>
                    <div class="loc-card">
                        <div class="loc-card-img-wrap">
                            <a href="https://maps.app.goo.gl/k9Dnvd97eABPcdXc7" target="_blank" rel="noopener">
                                <img src="images/king-koti-loction.jpg" alt="King Koti Hospital" class="loc-card-img">
                            </a>
                        </div>
                        <div class="loc-card-body">
                            <div class="loc-card-name"><a href="https://maps.app.goo.gl/k9Dnvd97eABPcdXc7"
                                    target="_blank" rel="noopener">KING KOTI, Hyderabad</a></div>
                            <p class="loc-card-addr"><a href="https://maps.app.goo.gl/k9Dnvd97eABPcdXc7" target="_blank"
                                    rel="noopener">Boggulakunta, King Koti, Abids, Hyderabad, Telangana 500001.</a></p>
                            <div class="loc-card-contact"><i class="fa-solid fa-phone-volume"></i> <a
                                    href="tel:+917815978159">+91 78159 78159</a></div>
                            <div class="loc-card-contact"><i class="fa-solid fa-location-dot"></i> <a
                                    href="mailto:info@kaminenihospitals.com">info@kaminenihospitals.com</a></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- =========== Locations Section End =========== -->


    <!-- =========== Video Testimonials =========== -->
    <section class="vtesti-section d-none">
        <div class="container">
            <div class="vtesti-grid">

                <div class="vtesti-card" data-video-id="lw7xIB0kPCo">
                    <div class="vtesti-img-wrap">
                        <img src="images/dr-swetha.jpg" alt="Sarosh Sambani" class="vtesti-img">
                        <button class="vtesti-play"><i class="fa-solid fa-play"></i></button>
                    </div>
                    <div class="vtesti-name">Sarosh Sambani</div>
                </div>

                <div class="vtesti-card" data-video-id="lw7xIB0kPCo">
                    <div class="vtesti-img-wrap">
                        <img src="images/dr-2.jpg" alt="Siya Prasanna" class="vtesti-img">
                        <button class="vtesti-play"><i class="fa-solid fa-play"></i></button>
                    </div>
                    <div class="vtesti-name">Siya Prasanna</div>
                </div>

                <div class="vtesti-card" data-video-id="lw7xIB0kPCo">
                    <div class="vtesti-img-wrap">
                        <img src="images/dr-3.jpg" alt="Sonia" class="vtesti-img">
                        <button class="vtesti-play"><i class="fa-solid fa-play"></i></button>
                    </div>
                    <div class="vtesti-name">Sonia sharma</div>
                </div>

                <div class="vtesti-card" data-video-id="lw7xIB0kPCo">
                    <div class="vtesti-img-wrap">
                        <img src="images/dr-swetha.jpg" alt="Shivani Rao" class="vtesti-img">
                        <button class="vtesti-play"><i class="fa-solid fa-play"></i></button>
                    </div>
                    <div class="vtesti-name">Shivani Rao</div>
                </div>

            </div>
        </div>
    </section>
    <!-- =========== Video Testimonials End =========== -->


    <!-- =========== Google Reviews =========== -->
    <section class="grev-section">
        <div class="container-fluid">
            <div class="grev-layout">

                <div class="grev-left">
                    <div class="grev-brand">
                        <svg width="44" height="44" viewBox="0 0 48 48">
                            <path fill="#EA4335"
                                d="M24 9.5c3.2 0 5.9 1.1 8.1 2.9l6-6C34.5 3.1 29.6 1 24 1 14.8 1 7 6.7 3.7 14.6l7 5.4C12.4 14 17.7 9.5 24 9.5z" />
                            <path fill="#4285F4"
                                d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z" />
                            <path fill="#FBBC05"
                                d="M10.7 28.5c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7-5.4C2.3 16.8 1.5 20.3 1.5 24s.8 7.2 2.2 10.5l7-5.5z" />
                            <path fill="#34A853"
                                d="M24 46.5c5.5 0 10.2-1.8 13.6-4.9l-7.4-5.7c-1.8 1.2-4.1 1.9-6.2 1.9-6.3 0-11.6-4.5-13.3-10.5l-7 5.5C7 40.2 14.8 46.5 24 46.5z" />
                            <path fill="none" d="M1.5 1.5h45v45h-45z" />
                        </svg>
                        <div>
                            <div class="grev-count">1 Lakh +<br>verified ratings</div>
                            <div class="grev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        </div>
                    </div>
                    <div class="grev-label">Patient<br> Google Review</div>
                    <div class="grev-nav">
                        <button class="grev-nav-btn" id="grevPrev"><i class="fa-solid fa-angle-left"></i></button>
                        <button class="grev-nav-btn" id="grevNext"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

                <div class="grev-track-wrap">
                    <div class="grev-owl owl-carousel">

                        <div class="grev-card">
                            <div class="grev-avatar">SK</div>
                            <div class="grev-g-icon">
                                <img src="images/google-icon.svg" alt="google">
                            </div>
                            <div class="grev-name">Sai Kumar Rendla</div>
                            <div class="grev-stars-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p class="grev-text">Visited Dr Ayyappa ENT Surgeon we are very much thankful for his
                                expertise</p>
                        </div>

                        <div class="grev-card">
                            <div class="grev-avatar">KD</div>
                            <div class="grev-g-icon">
                                <img src="images/google-icon.svg" alt="google">
                            </div>
                            <div class="grev-name">Karuna Dayam</div>
                            <div class="grev-stars-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p class="grev-text">My daughter admitted for ent surgery. Treatment, service, nursing care
                                is also good</p>
                        </div>

                        <div class="grev-card">
                            <div class="grev-avatar">A</div>
                            <div class="grev-g-icon">
                                <img src="images/google-icon.svg" alt="google">
                            </div>
                            <div class="grev-name">Aruna Bachina</div>
                            <div class="grev-stars-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p class="grev-text">My son had a tonsil operation and the ENT doctor was very kind. The
                                procedure was smooth and the hospital stay was very comfortable for the child.</p>
                        </div>

                        <div class="grev-card">
                            <div class="grev-avatar">ME</div>
                            <div class="grev-g-icon">
                                <img src="images/google-icon.svg" alt="google">
                            </div>
                            <div class="grev-name">Muthyam Erukala</div>
                            <div class="grev-stars-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p class="grev-text">We were treated under Dr Archana Dinesh B. It was fantastic experience
                                I visited for a sinus problem. The doctor checked everything very carefully and the
                                treatment worked very well for me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =========== Google Reviews End =========== -->


    <!-- =========== CTA Form =========== -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-layout">

                <div class="cta-left">
                    <div class="heading">
                        <h2><span>Say Goodbye</span> to ENT Problems!</h2>
                    </div>
                    <form id="ctaForm" class="cta-form" autocomplete="off" novalidate>
                        <!-- Honeypot -->
                        <div class="hp-field">
                            <input type="text" name="website" tabindex="-1" autocomplete="off">
                        </div>
                        <!-- Hidden GTM / UTM fields -->
                        <input type="hidden" name="form_type" value="cta">
                        <input type="hidden" name="utm_source" id="c_utm_source">
                        <input type="hidden" name="utm_medium" id="c_utm_medium">
                        <input type="hidden" name="utm_campaign" id="c_utm_campaign">
                        <input type="hidden" name="utm_term" id="c_utm_term">
                        <input type="hidden" name="utm_content" id="c_utm_content">
                        <input type="hidden" name="page_url" id="c_page_url">
                        <input type="hidden" name="referrer" id="c_referrer">

                        <div class="cta-field">
                            <input type="text" name="full_name" placeholder="Name" class="cta-input" required>
                        </div>
                        <div class="cta-field">
                            <input type="tel" name="phone" placeholder="Mobile" class="cta-input" required
                                maxlength="10">
                        </div>
                        <div class="cta-field">
                            <input type="number" name="captcha" id="c_captcha"
                                placeholder="<?php echo $c1; ?> + <?php echo $c2; ?> = ?" class="cta-input" required
                                min="0" max="99">
                        </div>
                        <button type="submit" class="cta-submit-btn" id="ctaSubmitBtn">Submit</button>
                        <div id="ctaMsg" class="form-msg cta-form-msg"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- =========== CTA Form End =========== -->


    <!-- =========== FAQ =========== -->
    <section class="faq-section">
        <div class="container">

            <div class="faq-heading heading">
                <h2><span>Frequently Asked</span><br>Questions</h2>
            </div>

            <div class="faq-list">

                <div class="faq-item active">
                    <button class="faq-q">
                        Are the ENT procedures at Kamineni Hospitals safe for young children?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>Yes. Our ENT specialists are trained in paediatric ENT care. We use US-FDA approved,
                            minimally invasive procedures that are safe for children of all ages, with a 0% post-op
                            infection rate backed by NABH certified protocols.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-q">
                        How soon can I return to work or daily activities after a "No-Scar" sinus surgery?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>Most patients resume light daily activities within 24–48 hours. Our no-scar, bloodless sinus
                            procedures are designed for rapid recovery with minimal downtime.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-q">
                        What makes the 0% post-op infection rate possible at your hospitals?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>We follow strict NABH certified sterilisation and infection control protocols, combined with
                            US-FDA approved surgical tools and techniques to ensure zero post-operative infections.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-q">
                        I have chronic ringing in my ears; can your specialists help?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>Yes. Tinnitus (ringing in the ears) is one of our specialisations. Our ENT experts conduct a
                            thorough diagnosis and recommend the most effective treatment plan tailored to your
                            condition.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-q">
                        Do you offer bloodless surgeries for throat and voice disorders?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>Yes. We offer bloodless, no-scar surgical options for voice disorders, throat infections, and
                            laryngology conditions using the latest minimally invasive techniques.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-q">
                        Do I need a prior appointment for an ENT consultation?
                        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
                    </button>
                    <div class="faq-a">
                        <p>Walk-ins are welcome, but booking an appointment ensures you get the earliest available slot
                            with your preferred specialist. Call <a href="tel:+917036270362" style="color: #fff;">+91
                                70362 70362</a> or fill out the form above.</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <!-- =========== FAQ End =========== -->


    <!-- Fixed Bottom Strip -->
    <div class="fixed-bottom-strip">
        <button class="fbs-btn fbs-book" id="fbsBookBtn">
            <i class="fa-solid fa-calendar-check"></i> <br>Appointment
        </button>
        <a href="tel:+917036270362" class="fbs-btn fbs-call">
            <img src="https://kaminenihospitals.com/wp-content/uploads/2023/06/Kamineni-Hospitals.gif" alt="Call Icon">
            <br>24/7 Helpline
        </a>
        <a href="https://wa.me/07995552901" class="fbs-btn fbs-whatsapp" target="_blank" rel="noopener"
            style="background: #25d366; color: #fff !important;">
            <i class="fa-brands fa-whatsapp"></i> <br />WhatsApp
        </a>

    </div>
    <!-- Fixed Bottom Strip End -->

    <!-- Sidebar Form Popup -->
    <div class="sb-popup-overlay" id="sbPopupOverlay">
        <div class="sb-popup-box">
            <button class="sb-popup-close" id="sbPopupClose"><i class="fa-solid fa-xmark"></i></button>
            <?php include 'sidebar-form.php'; ?>
        </div>
    </div>
    <!-- Sidebar Form Popup End -->

    <!-- Video Modal -->
    <div class="vmodal-overlay" id="vmodalOverlay">
        <div class="vmodal-box">
            <button class="vmodal-close" id="vmodalClose"><i class="fa-solid fa-xmark"></i></button>
            <div class="vmodal-iframe-wrap">
                <iframe id="vmodalIframe" src="" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <!-- Video Modal End -->

    <script src="js/style.js?<?php echo time(); ?>"></script>
    <script>
        $(document).ready(function () {
            var $entCards = $('.ent-cards');
            var $vtestiGrid = $('.vtesti-grid');

            function initEntSlider() {
                if ($(window).width() <= 767) {
                    if (!$entCards.hasClass('owl-loaded')) {
                        $entCards.addClass('owl-carousel').owlCarousel({
                            items: 1,
                            loop: true,
                            dots: false,
                            nav: true,
                            navText: ['&#10094;', '&#10095;'],
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                        });
                    }
                } else {
                    if ($entCards.hasClass('owl-loaded')) {
                        $entCards.trigger('destroy.owl.carousel');
                        $entCards.removeClass('owl-carousel owl-loaded');
                    }
                }
            }

            function initVtestiSlider() {
                if ($(window).width() <= 767) {
                    if (!$vtestiGrid.hasClass('owl-loaded')) {
                        $vtestiGrid.addClass('owl-carousel').owlCarousel({
                            items: 1,
                            loop: true,
                            dots: false,
                            nav: true,
                            navText: ['&#10094;', '&#10095;'],
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                        });
                    }
                } else {
                    if ($vtestiGrid.hasClass('owl-loaded')) {
                        $vtestiGrid.trigger('destroy.owl.carousel');
                        $vtestiGrid.removeClass('owl-carousel owl-loaded');
                    }
                }
            }

            initEntSlider();
            initVtestiSlider();
            $(window).on('resize', function () {
                initEntSlider();
                initVtestiSlider();
            });

            // Sidebar Form Popup
            var $sbOverlay = $('#sbPopupOverlay');
            var scrollPopupShown = false;

            function openSbPopup() {
                $sbOverlay.addClass('active');
                $('body').css('overflow', 'hidden');
            }

            function closeSbPopup() {
                $sbOverlay.removeClass('active');
                $('body').css('overflow', '');
            }

            $('#fbsBookBtn').on('click', function () {
                openSbPopup();
            });
            $('#sbPopupClose').on('click', function () {
                closeSbPopup();
            });
            $sbOverlay.on('click', function (e) {
                if ($(e.target).is($sbOverlay)) closeSbPopup();
            });

            // Auto-show popup at 50% scroll (once per session)
            $(window).on('scroll', function () {
                if (scrollPopupShown) return;
                var scrolled = $(window).scrollTop();
                var total = $(document).height() - $(window).height();
                if (total > 0 && (scrolled / total) >= 0.5) {
                    scrollPopupShown = true;
                    openSbPopup();
                }
            });
        });
    </script>

</body>

</html>