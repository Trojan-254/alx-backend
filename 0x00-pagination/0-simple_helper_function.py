#!/usr/bin/env python3
'''module for a simple helper function'''


def index_range(page, page_size):
    '''takes two int args, page and page_size
    returns a tuple of size two with start and end index'''
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
