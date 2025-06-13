import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, Eye, Calendar, Bookmark, BookmarkCheck, ExternalLink } from 'lucide-react';

const RepositoryCard = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img 
              src="https://avatars.githubusercontent.com/u/9919?v=4" 
              alt="owner"
              className="w-10 h-10 rounded-full ring-2 ring-slate-600"
            />
            <div className="min-w-0 flex-1">
              <CardTitle className="text-lg font-semibold text-white truncate">
                Example Repository
              </CardTitle>
              <p className="text-sm text-slate-400 truncate">
                example-owner
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-yellow-400 transition-colors">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
          This is an example description of a repository.
        </p>
        
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" /> 5.6k
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" /> 1.2k
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> 3.4k
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-yellow-500 text-white text-xs">
              JavaScript
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="w-3 h-3" /> updated 5 days ago
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">react</Badge>
          <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">hooks</Badge>
          <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">frontend</Badge>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            View on GitHub
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default RepositoryCard;
