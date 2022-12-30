from notifyr.agents import observed, observer
from notifyr.functions import target

@observed
class NewFeedAgent(object):
    def __init__(self, name):
        self.name = name

    @target
    def release_news(self):
        print('I need help')

    def update(self):
        print(self.name, 'update reader counts')

@observer('check_news')
class Reader(object):
    def __init__(self, name):
        self.name = name

    def check_news(self, new_feed_agent):
        print(self.name + ':','GTE New From,', new_feed_agent.name)
        new_feed_agent.update()

a = NewFeedAgent('Agent')
r = Reader('Reader1')
a.attach(r) # Reader is now observing Agent
a.release_news()