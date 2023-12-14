document.addEventListener("DOMContentLoaded", function () {
    var textNeedCount = document.querySelectorAll("#username, #password");
    M.CharacterCounter.init(textNeedCount);
});

// Swal.fire({    
//     icon: 'success',
//     title: data,
//     showConfirmButton: false,
//     timer: 1500
//   })

AOS.init();
ScrollTrigger.refresh()
ScrollTrigger.clearScrollMemory("manual");

window.history.scrollRestoration = "manual";


const Text = new SplitType('.fun-intro');
const Text2 = new SplitType('.fun-intro2');

gsap.to(Text2, {
    scrollTrigger: {
        trigger: "Text2",
        scroller: "html",
        scrub: 3,
        end: 'bottom 40%',
        // start: 'top -60%',
        // markers:true,
        // pin: true,
    },
    duration: .5,
    x: 0,
    stagger: .06,
    onRefresh: self => self.progress && self.animation.progress(1),
});

gsap.to('.fun-intro', {
    scrollTrigger: {
        trigger: ".fun-intro",
        scroller: "html",
        scrub: .2,
        end: 'bottom 40%',
        start: 'top 60%',
        // markers:true,
        // pin: true,
    },
    duration: .1,
    scale: '1.2',
});


gsap.to('.char', {
    scrollTrigger: {
        trigger: ".char",
        scroller: "html",
        scrub: 3,
        end: 'bottom 40%',
        // start: 'top -60%',
        // markers:true,
        // pin: true,
    },
    duration: .5,
    x: 0,
    stagger: .06,
    delay: .1,
    onRefresh: self => self.progress && self.animation.progress(1),
});

gsap.to('.card', {
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        scrub: 1,
        // markers:true,
    },
    duration: .5,
    y: 0,
    opacity: 1,
    stagger: .09,
    onRefresh: self => self.progress && self.animation.progress(1),
})

gsap.to('.wrapper', {
    scrollTrigger: {
        trigger: ".wrapper",
        scroller: "body",
        start: 1,
        // end: 'bottom top',
        // markers: true,
        scrub: 1,
    },
    duration: .8,
    scale: '.9',
});

gsap.to('.blog-card', {
    scrollTrigger: {
        trigger: ".blog-card",
        scroller: "body",
        end: 'bottom 80%',
        // markers: true,
        scrub: 1,
    },
    duration: .3,
    transform: 'translateX(0)',
});

gsap.to('.blog-header', {
    scrollTrigger: {
        trigger: ".blog-header",
        scroller: "body",
        // end: 'bottom 40%',
        // markers: true,
        scrub: .3,
    },
    duration: .3,
    scale: '1',
    transform: 'translateX(-3rem)',
});

$(window).on('load', function () {
    var content = $('#loader');
    setTimeout(function () {
        content.css({
            'opacity': '0',
            'visibility': 'hidden'
        });
    }, 1000);
});

$(document).ready(function () {
    $('#back-to-top').fadeOut();

    $('#mobile-nav li').click(function () {
        $('.sidenav-overlay').trigger('click');
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);


    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);


    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

$(document).ready(function () {
    const $tugas = $('#tugas');
    const $matkul = $('#matkul');
    const $jadwal = $('#jadwal');
    const $tombolJadwal = $('#tombol-jadwal');
    const $tombolTugas = $('#tombol-tugas');
    const $tombolMatkul = $('#tombol-matkul');

    $tugas.hide();
    $matkul.hide();
    $tombolJadwal.css({
        'background-color': '#469597',
        'color': '#fff'
    });

    function handleButtonClick($button, $content) {
        $button.click(function () {
            $jadwal.slideUp(300);
            $tugas.slideUp(300);
            $matkul.slideUp(300);
            $content.slideDown(300);

            $tombolJadwal.css({
                'background-color': 'transparent',
                'color': '#000'
            });
            $tombolTugas.css({
                'background-color': 'transparent',
                'color': '#000'
            });
            $tombolMatkul.css({
                'background-color': 'transparent',
                'color': '#000'
            });

            $button.css({
                'background-color': '#469597',
                'color': '#fff'
            });
        });
    }

    handleButtonClick($tombolJadwal, $jadwal);
    handleButtonClick($tombolTugas, $tugas);
    handleButtonClick($tombolMatkul, $matkul);
});

$(window).scroll(function () {
    const banner = $('#parallax');
    const screen = $('.screen');
    const navbar = $('.nav');

    if ($(window).scrollTop() >= 120) {
        navbar.addClass('scrolled');
        $('#login').addClass('indigo');
        $('#login').addClass('darken-1');
    } else {
        navbar.removeClass('scrolled');
        $('#login').removeClass('indigo');
        $('#login').removeClass('darken-1');
    }
})

function filterByHari() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filter-hari");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-jadwal");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]; // Assuming "Hari" is the 4th column (index 3)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (filter === '' || txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}