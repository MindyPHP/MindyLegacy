#!/bin/bash

cd app/Modules;

install_module() {
    git clone https://github.com/studio107/$1.git
}

install_module 'Admin'
install_module 'Core'
install_module 'Mail'
install_module 'Meta'
install_module 'Redirect'
install_module 'Sites'
install_module 'Translate'
install_module 'Comments'
install_module 'Files'
install_module 'Menu'
install_module 'Pages'
install_module 'Sitemap'
install_module 'User'
