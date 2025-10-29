// Step 1: Choose your photo
function choosePhoto() {
    Swal.fire({
        title: 'Choose your photo style <br> (˶˃ ᵕ ˂˶)',
        html: `
            <p style="font-size:14px; color:#555; line-height:1.6; margin-top:6px;">
                Would you like to use your own cute photo or an anime one? :3<br>
                （あなたの可愛い写真？それともアニメの？）
            </p>
        `,
        icon: 'info',
        showDenyButton: true,
        confirmButtonText: 'My Photo (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)',
        denyButtonText: 'Anime Photo ❤︎',
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#9d58ff',
        background: '#fffefc',
        customClass: {
            popup: 'swal2-border-radius-xl'
        }
    }).then((choice) => {
        const image = document.getElementById('imagePath');

        // --- Jika pilih "My Photo"
        if (choice.isConfirmed && image) {
            image.src = './img/cika.jpg';
            playMusicOption();
        }

        // --- Jika pilih "Anime Photo"
        else if (choice.isDenied && image) {
        Swal.fire({
            title: 'Are you sure?',
            html: `
                Do you want to use the anime photo instead?<br>
                (๑•﹏•)
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9d58ff',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I\'m sure ❤︎',
            cancelButtonText: 'Go back! (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)',
            background: '#fffefc',
            customClass: {
                popup: 'swal2-border-radius-xl'
            }
        }).then((confirmAnime) => {
                if (confirmAnime.isConfirmed) {
                    image.src = './img/anime.jpg';
                    playMusicOption();
                } else {
                    // Balik ke step awal
                    choosePhoto();
                }
            });
        }

        // Tambahkan hover ke semua tombol SweetAlert
        setTimeout(() => addHoverEffect(), 100);
    });

    // Tambahkan hover setelah popup muncul
    setTimeout(() => addHoverEffect(), 100);
}

// Step 2: Music option
function playMusicOption() {
    Swal.fire({
        title: 'Play background music? <br> (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)',
        html: `
            <p style="font-size:14px; color:#555; line-height:1.6; margin-top:6px;">
                Best experience on PC or laptop ♪<br>
                （でもスマホでもだいじょうぶだよ！）<br><br>
                <span style="font-size:12px; color:#aaa;">by <b>@i.a.falathin</b></span>
            </p>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Play Music ♫',
        cancelButtonText: 'No Music :3',
        background: '#fffefc',
        customClass: {
            popup: 'swal2-border-radius-xl'
        }
    }).then((result) => {
        const song = document.querySelector('.song');
        if (result.isConfirmed && song) song.play();
        animationTimeline();
    });

    // Hover effect juga di sini
    setTimeout(() => addHoverEffect(), 100);
}

// 🩵 Fungsi hover ke semua tombol SweetAlert
function addHoverEffect() {
    const buttons = document.querySelectorAll('.swal2-confirm, .swal2-deny, .swal2-cancel');
    buttons.forEach((btn) => {
        btn.style.transition = 'all 0.25s ease';

        btn.addEventListener('mouseenter', () => {
            if (btn.classList.contains('swal2-confirm')) {
                btn.style.background = '#4a9eff';
                btn.style.transform = 'scale(1.07)';
                btn.style.boxShadow = '0 0 12px rgba(74,158,255,0.6)';
            } else if (btn.classList.contains('swal2-deny')) {
                btn.style.background = '#b57aff';
                btn.style.transform = 'scale(1.07)';
                btn.style.boxShadow = '0 0 12px rgba(181,122,255,0.6)';
            } else if (btn.classList.contains('swal2-cancel')) {
                btn.style.background = '#ff5f5f';
                btn.style.transform = 'scale(1.07)';
                btn.style.boxShadow = '0 0 12px rgba(255,95,95,0.6)';
            }
        });

        btn.addEventListener('mouseleave', () => {
            if (btn.classList.contains('swal2-confirm')) {
                btn.style.background = '#3085d6';
            } else if (btn.classList.contains('swal2-deny')) {
                btn.style.background = '#9d58ff';
            } else if (btn.classList.contains('swal2-cancel')) {
                btn.style.background = '#d33';
            }
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = 'none';
        });
    });
}

// Jalankan langkah awal
choosePhoto();

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.073
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
