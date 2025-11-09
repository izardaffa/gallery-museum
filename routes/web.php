<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

// Route to Home
Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

// Route to Galery
Route::get('/gallery', function () {
    return Inertia::render('gallery');
})->name('gallery');

// Route to Galery Single
Route::get('/gallery/{id}', function ($id) {
    return Inertia::render('gallerySingle', [
        'id' => $id,
    ]);
})->name('gallery-single');

// Route to About
Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
