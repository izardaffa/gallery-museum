<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead


        <!-- BOOTSTRAP STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css">
        <!-- BOOTSTRAP SLECT BOX STYLE SHEET  -->
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap-select.min.css">   
        <!-- FONTAWESOME STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome/css/font-awesome.min.css" />
        <!-- OWL CAROUSEL STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.min.css">
        <!-- MAGNIFIC POPUP STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.min.css">
        <!-- LOADER STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/loader.min.css">
        <!-- FLATICON STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/flaticon.min.css">

        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap-slider.min.css">
        <!-- MAIN STYLE SHEET -->
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css">

        <!-- Side Switcher Css-->
        <link rel="stylesheet" type="text/css" href="/assets/css/switcher.css">

        <!-- REVOLUTION SLIDER CSS -->
        <link rel="stylesheet" type="text/css" href="/assets/plugins/revolution/revolution/css/settings.css">
        <!-- REVOLUTION NAVIGATION STYLE -->
        <link rel="stylesheet" type="text/css" href="/assets/plugins/revolution/revolution/css/navigation.css">
        <link rel="stylesheet" type="text/css" href="/assets/plugins/revolution-addons/beforeafter/css/revolution.addon.beforeafter.css">

        <!-- Google Fonts -->
        <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet">
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
