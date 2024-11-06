#!/usr/bin/python3
'''module for a basic dictionary cache'''


BaseCaching = __import__("base_caching").BaseCaching


class BasicCache():
    '''a caching system'''
    def __init__(self):
        '''initialization implementation'''
        super().__init__()

    def put(self, key, item):
        '''assigns to the dict self.cache_data'''
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        '''returns the value in self.cached_data
        linked to key'''
        if key not in self.cache_data.keys() or key is None:
            return None
        return self.cache_data.get(key)
