FROM node:16-bullseye AS builder

LABEL name="Qubetics Docs Service" \
    maintainer="Qubetics Engineering <qubetics.com>" \
    summary="Qubetics Docs Service" \
    description="Default Container Image for docs Service" \
    org.opencontainers.image.source=Qubetics/docs-service \
    org.opencontainers.image.description="Default Container Image for Qubetics Doc Service" \
    org.opencontainers.image.licenses="Qubetics Proprietary"

WORKDIR /home/node
COPY --chown=node:node . .

ARG BUILD_EXPIRE
ARG BUILD_DOMAIN
ARG NPM_AUTH_TOKEN

USER node

ENV NPM_AUTH_TOKEN=${NPM_AUTH_TOKEN}

RUN npm install
RUN npm run build

FROM nginx:mainline-alpine

COPY --from=builder /home/node/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3006