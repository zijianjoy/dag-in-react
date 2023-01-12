
# --- Retrieve token from Cloudbuild network
FROM gcr.io/cloud-builders/gcloud as gcloudstep

RUN --mount=type=secret,id=credential \
    if [ -f /run/secrets/credential ] ; then \
        echo "no token" > ./token.txt; \
    else \
        gcloud auth print-access-token > ./token.txt; \
    fi
    
RUN cat ./token.txt
