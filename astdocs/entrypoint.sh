#!/bin/bash

astdocs $@ | mdformat - --wrap=88
