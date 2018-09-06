FROM neekin/vue-cli:2.9.6
RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp