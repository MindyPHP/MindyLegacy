#!/bin/bash

function fetch_module {
    echo $1
    git clone git@github.com:MindyPHP/$1.git
}

function fetch_all_modules {
    modules=(Admin Core Mail User Meta Redirect Sites Files Pages Menu Sitemap)

    for item in ${modules[*]}
    do
        fetch_module $item
    done
}

mkdir -p app/Modules;
cd app/Modules;
fetch_all_modules