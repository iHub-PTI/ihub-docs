#!/bin/bash

REPOSITORIES=("boldo-server" "boldo-web" "boldo-mobile" "boldo-sockets" "ihub-keycloak")
# Missing: "ihub-fhir" "ihub-kong" "ihub-core"
ORGANIZATION="iHub-PTI"

cd "docs"

for REPOSITORY in "${REPOSITORIES[@]}"
do

    echo -e "\n--------\n"
	echo "Getting docs for" $REPOSITORY


    rm -rf $REPOSITORY

    git clone \
    --depth 1 \
    --filter=blob:none \
    --no-checkout \
    https://github.com/$ORGANIZATION/$REPOSITORY \
    ;
    cd $REPOSITORY
    git checkout main -- docs

    mv docs/* ./
    rm -rf docs

    cd ..

done

cd ..
echo -e "\nDONE ✅"