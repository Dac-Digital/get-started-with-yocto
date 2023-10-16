FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

# Upgrade system and Yocto Proyect basic dependencies                            
RUN apt-get update && apt-get -y upgrade && apt-get -y install gawk wget git git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat cpio python python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping libsdl1.2-dev xterm curl zstd lz4

# Set up locales                                                                 
RUN apt-get -y install locales apt-utils sudo && dpkg-reconfigure locales && locale-gen en_US.UTF-8 && update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8 
ENV LANG en_US.utf8     

# Clean up APT when done.                                                        
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*   

# Replace dash with bash                                                         
RUN rm /bin/sh && ln -s bash /bin/sh 

# User management                                                                
RUN groupadd -g 30000 build && useradd -u 30000 -g 30000 -ms /bin/bash build && usermod -a -G sudo build && usermod -a -G users build && \
    echo "build ALL=(ALL) NOPASSWD: ALL" | tee -a /etc/sudoers
                                                                                 
# Install repo                                                                   
RUN curl -o /usr/local/bin/repo https://storage.googleapis.com/git-repo-downloads/repo && chmod a+x /usr/local/bin/repo 

ENV USER=build
USER build
WORKDIR /home/build
