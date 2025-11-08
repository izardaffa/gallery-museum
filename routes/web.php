<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Route to Galery
Route::get('/galery', function () {
    return Inertia::render('galery');
})->name('galery');

// Route to Galery Single
Route::get('/galery/{id}', function ($id) {
    return Inertia::render('galerySingle', [
        'id' => $id,
    ]);
})->name('galery-single');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
