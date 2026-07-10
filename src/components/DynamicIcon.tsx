import React from 'react';
import { 
  Linkedin, Github, Download, Menu, X,
  Sparkles, Bot, Wrench, Map, BookOpen, Server, Mic, GitMerge, HelpCircle,
  Calendar, Clock, Check, ChevronDown, AlertCircle, ArrowLeft, User, Mail, MessageSquare,
  ArrowRight, Code, Award, Zap, Briefcase, Heart, Phone, MapPin, Activity, FileText, Globe, Terminal, Sliders, Cpu, Layers, Settings,
  ChevronLeft, ChevronRight
} from 'lucide-react';

// Unified Icon Map supporting all standard and customized sections across the site.
export const IconMap: Record<string, React.ComponentType<any>> = {
  Linkedin, Github, Download, Menu, X,
  Sparkles, Bot, Wrench, Map, BookOpen, Server, Mic, GitMerge, HelpCircle,
  Calendar, Clock, Check, ChevronDown, AlertCircle, ArrowLeft, User, Mail, MessageSquare,
  ArrowRight, Code, Award, Zap, Briefcase, Heart, Phone, MapPin, Activity, FileText, Globe, Terminal, Sliders, Cpu, Layers, Settings,
  ChevronLeft, ChevronRight
};

interface DynamicIconProps {
  name: string;
  className?: string;
  fallback?: React.ComponentType<any>;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className, fallback = Sparkles }) => {
  const IconComponent = IconMap[name] || fallback;
  return <IconComponent className={className} />;
};
