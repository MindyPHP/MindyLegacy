19.03.2015
Updated Application 0.2.1, Http 0.2.2, Base 0.3, Exception 0.2.
Refactored `ErrorHandler` class. Error cathing on `e_strict`, `e_warning`, `e_notice` level now enabled by default. Instead of simple text message now showing `exception`.This behaviour is customizable and this kind of errors are showing only in `$debug = true` mode.
