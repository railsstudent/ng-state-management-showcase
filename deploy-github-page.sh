#!/bin/sh

if [ $# -lt 1 ]; then
    echo "Usage: $0 <app folder name>"
    exit 1
fi

if [ "$1" = "all" ]; then
    echo "delete docs"
    rm -rf docs/*
    echo "build all project starts"
    project_names=("ng-ngrx-signalStore-demo" "ng-signal-demo" "ng-tanstack-store-demo", "ngRxAngularDemo")
    # Loop through the array elements using a for loop
    for item in "${project_names[@]}"; do
        ng build --project=$item --output-path docs/$item
        cp ./docs/${item}/browser/index.html  ./docs/${item}/browser/404.html
        cp ./docs/${item}/browser/*  ./docs/${item}
        rm -rf ./docs/${item}/browser
    done
    echo 'build all projects finish'
else
    echo "delete docs/$1"
    rm -rf docs/$1
    echo "build project $1 starts"
    ng build --project=$1 --output-path docs/$1
    cp ./docs/$1/browser/index.html  ./docs/$1/browser/404.html
    cp ./docs/$1/browser/*  ./docs/$1
    rm -rf ./docs/$1/browser
    echo 'build project finishes'
fi


